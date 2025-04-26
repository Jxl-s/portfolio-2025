import { GLTFLoader, type GLTF } from 'three/examples/jsm/Addons.js';
import { EventEmitter } from './event-emitter';
import * as THREE from 'three';
import { Events } from '../data/events';
import { type Asset, AssetType } from '../data/assets';
import { AjaxTextureLoader } from './ajax-texture-loader';

type AssetResults = {
	[AssetType.Gltf]: GLTF;
	[AssetType.Texture]: THREE.Texture;
};

/**
 * Assets class to load and manage assets
 */
export class Assets extends EventEmitter {
	// Items
	private assets: Asset[];
	private items: Map<string, unknown> = new Map();
	private itemsLoading: Map<string, number> = new Map();

	// Loaders
	private gltfLoader: GLTFLoader;
	private textureLoader: THREE.TextureLoader;

	// Track progress
	private loadedBytes: number;
	private totalBytes: number;
	private totalCount: number;
	private loadedCount: number;

	constructor(assets: Asset[]) {
		super();

		this.assets = assets;

		this.loadedBytes = 0;
		this.totalBytes = assets.reduce((total, asset) => total + asset.bytes, 0);

		// Setup progress
		this.loadedCount = 0;
		this.totalCount = this.assets.length;

		// Setup loaders
		this.gltfLoader = new GLTFLoader();
		this.textureLoader = AjaxTextureLoader();
	}

	/**
	 * Start loading all assets. Should be called once by the experience.
	 */
	public startLoading() {
		for (const asset of this.assets) {
			if (asset.type === AssetType.Gltf) {
				this.gltfLoader.load(
					asset.path,
					(file) => this.loaded(asset, file),
					(event) => this.progress(asset, event)
				);
			}

			if (asset.type === AssetType.Texture) {
				this.textureLoader.load(
					asset.path,
					(file) => this.loaded(asset, file),
					(event) => this.progress(asset, event)
				);
			}
		}
	}

	/**
	 * Callback when an asset is loaded
	 */
	private loaded(asset: Asset, file: unknown) {
		this.items.set(asset.name, file);
		this.loadedCount++;

		this.emit(Events.AssetLoaded, {
			name: asset.name
		});

		if (this.loadedCount === this.totalCount) {
			this.emit(Events.AssetsReady);
		}
	}

	/**
	 * Callback when progress is made
	 */
	private progress(asset: Asset, event: ProgressEvent) {
		const previous = this.itemsLoading.get(asset.name) ?? 0;
		const delta = event.loaded - previous;

		this.itemsLoading.set(asset.name, event.loaded);
		this.loadedBytes += delta;

		// Dispatch an update for the progress
		this.emit(Events.AssetProgress, this.loadedBytes, this.totalBytes);
	}

	/**
	 * Gets an asset by name
	 */
	public get<T extends AssetResults[AssetType]>(name: string): T {
		return this.items.get(name) as T;
	}

	// Garbage collector might make this redundant
	public destroy() {
		for (const item of this.items.values()) {
			if (item instanceof THREE.Texture) {
				item.dispose();
			}

			if (item instanceof THREE.Group) {
				item.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.geometry.dispose();
						child.material.dispose();
					}
				});
			}
		}

		this.items.clear();
		this.itemsLoading.clear();
	}
}

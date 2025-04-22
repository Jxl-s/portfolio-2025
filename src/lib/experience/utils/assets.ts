import { GLTFLoader, type GLTF } from 'three/examples/jsm/Addons.js';
import { EventEmitter } from './event-emitter';
import * as THREE from 'three';
import { Events } from '../data/events';
import { type Asset, AssetType } from '../data/assets';

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
	private items: Record<string, unknown> = {};

	// Loaders
	private gltfLoader: GLTFLoader;
	private textureLoader: THREE.TextureLoader;

	// Track progress
	private totalCount: number;
	private loadedCount: number;

	constructor(assets: Asset[]) {
		super();

		this.assets = assets;

		// Setup progress
		this.loadedCount = 0;
		this.totalCount = this.assets.length;

		// Setup loaders
		this.gltfLoader = new GLTFLoader();
		this.textureLoader = new THREE.TextureLoader();
	}

	/**
	 * Start loading all assets. Should be called once by the experience.
	 */
	public startLoading() {
		for (const asset of this.assets) {
			if (asset.type === AssetType.Gltf) {
				this.gltfLoader.load(asset.path, (file) => {
					this.loaded(asset, file);
				});
			}

			if (asset.type === AssetType.Texture) {
				this.textureLoader.load(asset.path, (file) => {
					this.loaded(asset, file);
				});
			}
		}
	}

	/**
	 * Callback when an asset is loaded
	 */
	private loaded(asset: Asset, file: unknown) {
		this.items[asset.name] = file;
		this.loadedCount++;

		this.emit(Events.AssetLoaded, {
			name: asset.name
		});

		if (this.loadedCount === this.totalCount) {
			this.emit(Events.AssetsReady);
		}
	}

	/**
	 * Gets an asset by name
	 */
	public get<T extends AssetResults[AssetType]>(name: string): T {
		return this.items[name] as T;
	}
}


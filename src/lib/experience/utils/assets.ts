import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { EventEmitter } from './event-emitter';
import * as THREE from 'three';
import { Events } from '../data/events';
import { type Asset, AssetType } from '../data/assets';

export class Assets extends EventEmitter {
	private assets: Asset[];
	private items: Record<string, unknown> = {};
	private loaders: {
		gltfLoader: GLTFLoader;
		textureLoader: THREE.TextureLoader;
	};

	private totalCount: number;
	private loadedCount: number = 0;

	constructor(assets: Asset[]) {
		super();

		this.assets = assets;
		this.totalCount = this.assets.length;

		this.loaders = {
			gltfLoader: new GLTFLoader(),
			textureLoader: new THREE.TextureLoader()
		};

		this.startLoading();
	}

	private startLoading() {
		for (const asset of this.assets) {
			if (asset.type === AssetType.Gltf) {
				this.loaders.gltfLoader.load(asset.path, (file) => {
					this.loaded(asset, file);
				});
			}

			if (asset.type === AssetType.Texture) {
				this.loaders.textureLoader.load(asset.path, (file) => {
					this.loaded(asset, file);
				});
			}
		}
	}

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

	public get(name: string) {
		return this.items[name];
	}
}

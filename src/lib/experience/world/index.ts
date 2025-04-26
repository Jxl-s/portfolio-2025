import type Experience from '..';
import { Events } from '../data/events';
import House from './House';
import * as THREE from 'three';

/**
 * World class to handle any world objects
 */
export class World {
	private experience: Experience;
	private scene: THREE.Scene;

	// Scene objects
	private house?: House;

	// Listeners
	private progressListener: Function;
	private readyListener: Function;

	constructor(experience: Experience) {
		this.experience = experience;
		this.scene = experience.scene;

		this.progressListener = (loadedBytes: number, totalBytes: number) => {
			console.log(loadedBytes, totalBytes);
		};

		this.readyListener = () => {
			// Do something, and then that thing will start the world (loading screen)
			this.startWorld();
		};

		this.experience.assets.on(Events.AssetProgress, this.progressListener);
		this.experience.assets.on(Events.AssetsReady, this.readyListener);
	}

	/**
	 * Handles when assets and everything are ready
	 */
	public startWorld() {
		this.house = new House(this.experience);
	}

	/**
	 * Tick function
	 */
	public update() {
		this.house?.update();
	}

	public destroy() {
		this.experience.assets.off(Events.AssetProgress, this.progressListener);
		this.experience.assets.off(Events.AssetsReady, this.readyListener);

		// Clean individual items
		this.house?.destroy();

		// Final scene cleanup (thanks chatgpt)
		this.scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.geometry.dispose();

				if (Array.isArray(child.material)) {
					for (const material of child.material) {
						material.dispose();
					}
				} else {
					child.material.dispose();
				}
			}

			if (child instanceof THREE.Mesh && child.material) {
				const materials = Array.isArray(child.material) ? child.material : [child.material];
				for (const material of materials) {
					for (const key in material) {
						const value = (material as any)[key];
						if (value && value.isTexture) {
							value.dispose();
						}
					}
				}
			}
		});

		while (this.scene.children.length > 0) {
			this.scene.remove(this.scene.children[0]);
		}
	}
}

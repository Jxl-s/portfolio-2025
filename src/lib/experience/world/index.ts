import * as THREE from 'three';
import type Experience from '..';
import { Events } from '../data/events';
import type { GLTF } from 'three/examples/jsm/Addons.js';

/**
 * World class to handle any world objects
 */
export class World {
	private experience: Experience;
	private scene: THREE.Scene;

	constructor(experience: Experience) {
		this.experience = experience;
		this.scene = this.experience.scene;

		// run a small test
		const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
		const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

		this.experience.scene.add(boxMesh);
		this.experience.assets.on(Events.AssetsReady, () => {
			const houseModel = this.experience.assets.get<GLTF>('sceneModel');
			const houseTexture = this.experience.assets.get<THREE.Texture>('sceneTexture');

			houseTexture.flipY = false;
			houseModel.scene.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = new THREE.MeshBasicMaterial({
						map: houseTexture
					});
				}
			});

			this.scene.add(houseModel.scene);
		});
	}
}

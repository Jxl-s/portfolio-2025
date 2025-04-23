import * as THREE from 'three';
import type Experience from '..';
import type { GLTF } from 'three/examples/jsm/Addons.js';

export default class House {
	private instance: THREE.Group;

	constructor(experience: Experience) {
		const houseModel = experience.assets.get<GLTF>('sceneModel');
		const houseTexture = experience.assets.get<THREE.Texture>('sceneTexture');

		houseTexture.colorSpace = THREE.SRGBColorSpace;
		houseTexture.flipY = false;
		houseModel.scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = new THREE.MeshBasicMaterial({
					map: houseTexture
				});
			}
		});

		this.instance = houseModel.scene;
		experience.scene.add(this.instance);
	}

	public update() {
		this.instance.rotation.y += 0.001;
		this.instance.position.y = Math.sin(this.instance.rotation.y) * 0.5;
	}
}

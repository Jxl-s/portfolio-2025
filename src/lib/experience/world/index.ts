import * as THREE from 'three';
import type Experience from '..';

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

		this.scene.add(boxMesh);
	}
}

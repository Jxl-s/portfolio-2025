import * as THREE from 'three';
import type { Sizes } from './utils/sizes';

import type Experience from '.';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

/**
 * Camera class to handle the camera and movements
 */
export class Camera {
	public instance: THREE.PerspectiveCamera;
	public controls: OrbitControls;

	private scene: THREE.Scene;
	private sizes: Sizes;
	private canvas: HTMLCanvasElement;

	constructor(experience: Experience) {
		// Get fields from the experience
		this.scene = experience.scene;
		this.sizes = experience.sizes;
		this.canvas = experience.canvas;

		// Create the camera
		this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);
		this.instance.position.set(0, 0, 3);

		this.controls = new OrbitControls(this.instance, this.canvas);
		this.controls.enableDamping = true;

		experience.scene.add(this.instance);
	}

	public resize() {
		this.instance.aspect = this.sizes.width / this.sizes.height;
		this.instance.updateProjectionMatrix();
	}

	public destroy() {
		this.controls.dispose();
		this.scene.remove(this.instance);
	}
}

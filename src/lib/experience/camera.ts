import * as THREE from 'three';
import type { Sizes } from './utils/sizes';

import Experience from '.';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export class Camera {
	public instance: THREE.PerspectiveCamera;
	public controls: OrbitControls;

	private sizes: Sizes;
	private canvas: HTMLCanvasElement;

	constructor() {
		// Get fields from the experience
		const experience = Experience.get();
		this.sizes = experience.sizes;
		this.canvas = experience.canvas;

		// Create the camera
		this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);
		this.controls = new OrbitControls(this.instance, this.canvas);
		this.controls.enableDamping = true;

		experience.scene.add(this.instance);
	}

	public resize() {
		this.instance.aspect = this.sizes.width / this.sizes.height;
		this.instance.updateProjectionMatrix();
	}
}

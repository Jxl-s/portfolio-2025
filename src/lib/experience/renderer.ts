import * as THREE from 'three';
import type Experience from '.';
import type { Sizes } from './utils/sizes';
import type { Camera } from './camera';

/**
 * Renderer class to handle the rendering of the scene
 */
export class Renderer {
	private instance: THREE.WebGLRenderer;
	private scene: THREE.Scene;

	private camera: Camera;
	private sizes: Sizes;

	constructor(experience: Experience) {
		this.scene = experience.scene;
		this.camera = experience.camera;
		this.sizes = experience.sizes;

		// TODO: add more renderer configurations for better quality (like shadows, etc..)
		this.instance = new THREE.WebGLRenderer({
			canvas: experience.canvas,
			antialias: true
		});

		this.resize();
	}

	public resize() {
		this.instance.setSize(this.sizes.width, this.sizes.height);
		this.instance.setPixelRatio(this.sizes.pixelRatio);
	}

	public update() {
		this.instance.render(this.scene, this.camera.instance);
	}
}

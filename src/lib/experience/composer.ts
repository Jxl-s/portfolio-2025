import { EffectComposer, RenderPass } from 'three/examples/jsm/Addons.js';
import Experience from '.';
import type { Sizes } from './utils/sizes';
import * as THREE from 'three';
import type { Camera } from './camera';

export class Composer {
	public instance: EffectComposer;

	private experience: Experience;
	private camera: Camera;
	private sizes: Sizes;

	constructor(experience: Experience, renderer: THREE.WebGLRenderer) {
		// Load external dependencies
		this.experience = experience;
		this.camera = experience.camera;
		this.sizes = experience.sizes;

		// Create effect composer
		this.instance = new EffectComposer(renderer);
		this.addPass();
	}

	private addPass() {
		const renderPass = new RenderPass(this.experience.scene, this.camera.instance);
		this.instance.addPass(renderPass);

		// Add other passes here
	}

	public resize() {
		this.instance.setSize(this.sizes.width, this.sizes.height);
	}

	public render() {
		this.instance.render();
	}
}

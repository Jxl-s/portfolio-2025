import * as THREE from 'three';

class Experience {
	private static instance: Experience;
	public static get(): Experience {
		if (!Experience.instance) {
			// Assume the canvas exists
			const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;
			Experience.instance = new Experience(canvas);
		}

		return Experience.instance;
	}

	private canvas: HTMLCanvasElement;
	private scene: THREE.Scene;

	private constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.scene = new THREE.Scene();
	}
}

export default Experience;

import * as THREE from 'three';

class Experience {
	// Handle canvas
	public static canvas: HTMLCanvasElement;

	// Singleton stuff
	private static instance: Experience;
	public static get(): Experience {
		if (!Experience.instance) {
			Experience.instance = new Experience();
		}

		return Experience.instance;
	}

	private scene: THREE.Scene;
	private constructor() {
		this.scene = new THREE.Scene();
	}
}

export default Experience;

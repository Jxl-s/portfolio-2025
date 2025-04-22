import * as THREE from 'three';
import { Sizes } from './utils/sizes';
import { Time } from './utils/time';
import { Events } from './utils/events';

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

	private sizes: Sizes;
	private time: Time;

	private constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.scene = new THREE.Scene();

		this.sizes = new Sizes();
		this.time = new Time();

		this.sizes.on(Events.Resize, () => this.resize());
		this.time.on(Events.Tick, () => this.tick());
	}

	private resize() {}
	private tick() {}
}

export default Experience;

import * as THREE from 'three';
import { Sizes } from './utils/sizes';
import { Time } from './utils/time';
import { Events } from './utils/events';
import { Camera } from './camera';
import { Renderer } from './renderer';
import { World } from './world';

class Experience {
	public canvas: HTMLCanvasElement;
	public scene: THREE.Scene;

	public sizes: Sizes;
	public time: Time;

	public camera: Camera;
	public renderer: Renderer;
	public world: World;

	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.scene = new THREE.Scene();

		// Setup utilities
		this.sizes = new Sizes();
		this.time = new Time();

		// Setup renderer
		this.camera = new Camera(this);
		this.renderer = new Renderer(this);
		this.world = new World(this);

		// Handle callbacks
		this.sizes.on(Events.Resize, () => this.resize());
		this.time.on(Events.Tick, () => this.update());
	}

	private resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	private update() {
		this.camera.controls.update();
		this.renderer.update();
	}
}

export default Experience;

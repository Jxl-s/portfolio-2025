import * as THREE from 'three';
import { Sizes } from './utils/sizes';
import { Time } from './utils/time';
import { Events } from './data/events';
import { Camera } from './camera';
import { Renderer } from './renderer';
import { World } from './world';
import { Assets } from './utils/assets';
import { assets } from './data/assets';

class Experience {
	public canvas: HTMLCanvasElement;
	public scene: THREE.Scene;

	public sizes: Sizes;
	public time: Time;

	public camera: Camera;
	public renderer: Renderer;
	public world: World;
	public assets: Assets;

	private resizeListener: Function;
	private tickListener: Function;

	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.assets = new Assets(assets);

		// Setup utilities
		this.sizes = new Sizes();
		this.time = new Time();

		// Setup camera, renderer, and world
		this.camera = new Camera(this);
		this.renderer = new Renderer(this);
		this.world = new World(this);

		// Handle callbacks
		this.resizeListener = () => this.resize();
		this.tickListener = () => this.update();

		this.sizes.on(Events.Resize, this.resizeListener);
		this.time.on(Events.Tick, this.tickListener);

		// Start loading items
		this.assets.startLoading();
	}

	public destroy() {
		console.log('DESTROY CALLED');
		this.sizes.off(Events.Resize, this.resizeListener);
		this.time.off(Events.Tick, this.tickListener);

		this.assets.destroy();
		this.sizes.destroy();
		this.time.destroy();

		this.camera.destroy();
		this.renderer.destroy();
		this.world.destroy();
	}

	private resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	private update() {
		this.camera.controls.update();
		this.world.update();
		this.renderer.update();
	}
}

export default Experience;

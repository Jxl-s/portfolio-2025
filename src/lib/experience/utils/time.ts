import { EventEmitter } from './event-emitter';
import { Events } from '../data/events';

/**
 * Time class to handle time and animation frames
 */
export class Time extends EventEmitter {
	public start: number;
	public current: number;
	public elapsed = 0;
	public delta = 16;

	private animationFrameId: number;

	constructor() {
		super();

		// Set initial times
		this.start = Date.now();
		this.current = this.start;

		this.animationFrameId = window.requestAnimationFrame(() => this.tick());
	}

	private tick() {
		const currentTime = Date.now();
		this.delta = currentTime - this.current;
		this.current = currentTime;
		this.elapsed = currentTime - this.start;

		this.emit(Events.Tick);
		this.animationFrameId = window.requestAnimationFrame(() => this.tick());
	}

	public destroy() {
		window.cancelAnimationFrame(this.animationFrameId);
	}
}

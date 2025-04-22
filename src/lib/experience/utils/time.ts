import { EventEmitter } from './event-emitter';
import { Events } from '../data/events';

export class Time extends EventEmitter {
	public start: number;
	public current: number;
	public elapsed = 0;
	public delta = 16;

	constructor() {
		super();

		this.start = Date.now();
		this.current = this.start;

		window.requestAnimationFrame(() => this.tick());
	}

	private tick() {
		const currentTime = Date.now();
		this.delta = currentTime - this.current;
		this.current = currentTime;
		this.elapsed = currentTime - this.start;

		this.emit(Events.Tick);
		window.requestAnimationFrame(() => this.tick());
	}
}

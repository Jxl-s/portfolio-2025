import { EventEmitter } from './event-emitter';
import { Events } from '../data/events';

export class Sizes extends EventEmitter {
	public width: number;
	public height: number;
	public pixelRatio: number;

	constructor() {
		super();

		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);

		window.addEventListener('resize', () => {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.pixelRatio = Math.min(window.devicePixelRatio, 2);

			this.emit(Events.Resize);
		});
	}
}

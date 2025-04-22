import { EventEmitter } from './event-emitter';
import { Events } from '../data/events';

/**
 * Sizes class to handle window size changes
 */
export class Sizes extends EventEmitter {
	public width: number;
	public height: number;
	public pixelRatio: number;

	constructor() {
		super();

		// Set initial parameters
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);

		window.addEventListener('resize', () => {
			// Update sizes
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.pixelRatio = Math.min(window.devicePixelRatio, 2);

			this.emit(Events.Resize);
		});
	}
}

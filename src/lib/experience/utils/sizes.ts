import { EventEmitter } from './event-emitter';
import { Events } from '../data/events';

/**
 * Sizes class to handle window size changes
 */
export class Sizes extends EventEmitter {
	public width: number;
	public height: number;
	public pixelRatio: number;

	private resizeListener: () => void;
	constructor() {
		super();

		// Set initial parameters
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);

		this.resizeListener = () => {
			// Update sizes
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.pixelRatio = Math.min(window.devicePixelRatio, 2);
			this.emit(Events.Resize);
		};

		window.addEventListener('resize', this.resizeListener);
	}

	public destroy() {
		window.removeEventListener('resize', this.resizeListener);
	}
}

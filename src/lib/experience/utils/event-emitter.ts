import { Events } from '../data/events';

/**
 * EventEmitter class to handle events
 */
export abstract class EventEmitter {
	private callbacks: Record<number, Function[]> = {};

	/**
	 * Adds a callback to the event emitter.
	 */
	public on(event: Events, callback: Function) {
		if (!this.callbacks[event]) {
			this.callbacks[event] = [];
		}

		this.callbacks[event].push(callback);
	}

	/**
	 * Calls all callbacks for a certain event
	 */
	public emit(event: Events, ...args: any[]) {
		if (!this.callbacks[event]) {
			return;
		}

		this.callbacks[event].forEach((callback) => {
			callback(...args);
		});
	}

	/**
	 * Removes all callbacks from a certain event
	 */
	public off(event: Events, callback: Function) {
		if (!this.callbacks[event]) {
			return;
		}

		this.callbacks[event] = this.callbacks[event].filter((cb) => cb !== callback);
	}
}

import { Events } from '../data/events';

export abstract class EventEmitter {
	private callbacks: Record<number, Function[]> = {};

	public on(event: Events, callback: Function) {
		if (!this.callbacks[event]) {
			this.callbacks[event] = [];
		}

		this.callbacks[event].push(callback);
	}

	public emit(event: Events, ...args: any[]) {
		if (!this.callbacks[event]) {
			return;
		}

		this.callbacks[event].forEach((callback) => {
			callback(...args);
		});
	}

	public off(event: Events, callback: Function) {
		if (!this.callbacks[event]) {
			return;
		}

		this.callbacks[event] = this.callbacks[event].filter((cb) => cb !== callback);
	}
}

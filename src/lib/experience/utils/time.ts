class Time {
	public start: number;
	public current: number;
	public elapsed = 0;
	public delta = 16;

	constructor() {
		this.start = Date.now();
		this.current = this.start;

		window.requestAnimationFrame(() => this.tick());
	}

	private tick() {
		const currentTime = Date.now();
		this.delta = currentTime - this.current;
		this.current = currentTime;
		this.elapsed = currentTime - this.start;

		// TODO: Dispatch a tick event
		window.requestAnimationFrame(() => this.tick());
	}
}

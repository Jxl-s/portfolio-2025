class Sizes {
	public width: number;
	public height: number;
	public pixelRatio: number;

	constructor() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.pixelRatio = Math.min(window.devicePixelRatio, 2);

		window.addEventListener('resize', () => {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.pixelRatio = Math.min(window.devicePixelRatio, 2);

			// TODO: Dispatch a resize
		});
	}
}

export default Sizes;

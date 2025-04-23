import type Experience from '..';
import { Events } from '../data/events';
import House from './House';

/**
 * World class to handle any world objects
 */
export class World {
	private experience: Experience;

	// Scene objects
	private house?: House;

	constructor(experience: Experience) {
		this.experience = experience;
		this.experience.assets.on(Events.AssetsReady, () => {
			// Do something, and then that thing will start the world (loading screen)
			this.startWorld();
		});
	}

	/**
	 * Handles when assets and everything are ready
	 */
	public startWorld() {
		this.house = new House(this.experience);
	}

	/**
	 * Tick function
	 */
	public update() {
		this.house?.update();
	}
}

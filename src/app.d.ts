// See https://svelte.dev/docs/kit/types#app.d.ts

import type Experience from '$lib/experience';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		experience: Experience;
	}
}

export {};

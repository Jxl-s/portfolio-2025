import * as THREE from 'three';

export declare function AjaxTextureLoader(): THREE.TextureLoader & {
	load(
		url: string,
		onLoad: (texture: THREE.Texture) => void,
		onProgress?: (event: ProgressEvent<EventTarget>) => void,
		onError?: (event: ErrorEvent) => void
	): void;
};

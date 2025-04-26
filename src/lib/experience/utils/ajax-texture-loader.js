import * as THREE from 'three';

export function AjaxTextureLoader() {
	const cache = THREE.Cache;
	cache.enabled = true;

	const textureLoader = new THREE.TextureLoader();
	const fileLoader = new THREE.FileLoader();
	fileLoader.setResponseType('blob');

	function load(url, onLoad, onProgress, onError) {
		// Before loading, make sure there's no bad cache entry
		THREE.Cache.remove(url);

		fileLoader.load(url, cacheImage, onProgress, (err) => {
			if (onError) onError(err);
		});

		function cacheImage(response) {
			// Validate the response is a Blob
			if (!(response instanceof Blob)) {
				console.error('AjaxTextureLoader Error: Expected Blob but got', response);
				if (onError) onError(new Error('Invalid Blob response'));
				return;
			}

			const objUrl = URL.createObjectURL(response);
			const image = document.createElement('img');

			image.style.visibility = 'hidden';
			image.style.position = 'absolute';
			image.style.top = '-9999px';
			image.onload = () => {
				// Add to THREE.Cache manually
				cache.add(url, image);
				URL.revokeObjectURL(objUrl);
				if (document.body.contains(image)) {
					document.body.removeChild(image);
				}
				loadImageAsTexture();
			};

			image.onerror = (e) => {
				URL.revokeObjectURL(objUrl);
				if (document.body.contains(image)) {
					document.body.removeChild(image);
				}
				if (onError) onError(new Error('Failed to load image'));
			};

			image.src = objUrl;
			document.body.appendChild(image);
		}

		function loadImageAsTexture() {
			textureLoader.load(url, onLoad, undefined, onError);
		}
	}

	// Return the textureLoader interface but override load
	return Object.assign({}, textureLoader, { load });
}

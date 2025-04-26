export enum AssetType {
	Gltf,
	Texture
}

export interface Asset {
	name: string;
	type: AssetType;
	path: string;
	bytes: number;
}

/**
 * List of assets to load
 */
export const assets: Asset[] = [
	{
		name: 'sceneModel',
		type: AssetType.Gltf,
		path: 'models/scene.glb',
		bytes: 317536
	},
	{
		name: 'sceneTexture',
		type: AssetType.Texture,
		path: 'textures/scene.jpg',
		bytes: 313155
	}
];

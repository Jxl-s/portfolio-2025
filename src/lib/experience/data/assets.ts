export enum AssetType {
	Gltf,
	Texture
}

export interface Asset {
	name: string;
	type: AssetType;
	path: string;
}

export const assets: Asset[] = [
	{
		name: 'sceneModel',
		type: AssetType.Gltf,
		path: 'models/scene.glb'
	},
	{
		name: 'sceneTexture',
		type: AssetType.Texture,
		path: 'textures/scene.jpg'
	}
] as const;

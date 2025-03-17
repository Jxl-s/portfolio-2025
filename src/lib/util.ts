export function hasKey<O extends Record<string, string>>(obj: O, key: keyof any): key is keyof O {
	return key in obj;
}

import { derived, writable } from 'svelte/store';
import { hasKey } from '$lib/util';
import translations, { type Languages, type LanguageKeys } from './translations';

export const locale = writable<Languages>('en');
export const locales = Object.keys(translations);

function translate(locale: Languages, key: LanguageKeys, vars: Record<string, string>) {
	// Grab the translation from the translations object.
	let text: string = hasKey(translations[locale], key)
		? translations[locale][key]
		: translations['en'][key];

	// Replace any passed in variables in the translation string.
	for (const [k, v] of Object.entries(vars)) {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, v);
	}

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key: LanguageKeys, vars = {}) =>
			translate($locale, key, vars)
);

export function setLocale(newLocale: Languages) {
	locale.set(newLocale);
}

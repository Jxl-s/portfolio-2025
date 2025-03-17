import type { LanguageKeys } from '$lib/i18n/translations';

interface Work {
	company: string;
	website?: string;
	position: LanguageKeys;
	dates: LanguageKeys;
	location: LanguageKeys;
	description: LanguageKeys;
}

const workExperience: Work[] = [
	{
		company: 'NDT Technologies Inc.',
		website: 'https://ndt.ca',

		position: 'ndt.position',
		dates: 'ndt.dates',
		location: 'montreal, canada',
		description: 'ndt.description'
	}
];

export default workExperience;

import type { LanguageKeys } from '$lib/i18n/translations';

interface Education {
	school: LanguageKeys;
	degree: LanguageKeys;
	graduation: LanguageKeys;
	grade: LanguageKeys;
}

const education: Education[] = [
	{
		school: 'concordia.title',
		degree: 'concordia.degree',
		graduation: 'concordia.graduation',
		grade: 'concordia.grade'
	},
	{
		school: 'vanier.title',
		degree: 'vanier.degree',
		graduation: 'vanier.graduation',
		grade: 'vanier.grade'
	}
];

export default education;

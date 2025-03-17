import type { LanguageKeys } from '$lib/i18n/translations';

interface Project {
	demo?: string;
	source?: string;

	name: LanguageKeys;
	description: LanguageKeys[];
	stack: string[];

	thumbnail: string;
}

const projects: Project[] = [
	{
		name: 'leetwrite',
		description: ['leetwrite.description_1', 'leetwrite.description_2'],

		demo: 'https://devpost.com/software/leetwrite',
		source: 'https://github.com/Jxl-s/LeetWrite',

		stack: ['Next.js', 'Tailwind CSS', 'Socket.IO', 'OpenAI'],
		thumbnail: '/images/projects/2025-leetwrite.webp'
	}
];

export default projects;

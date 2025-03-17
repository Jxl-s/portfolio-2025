import type { LanguageKeys } from '$lib/i18n/translations';

interface Project {
	demo?: string;
	source?: string;

	name: LanguageKeys;
	description: LanguageKeys;
	stack: string[];
}

const projects: Project[] = [
	{
		name: 'leetwrite',
		description: 'leetwrite.description',
		demo: 'https://devpost.com/software/leetwrite',
		source: 'https://github.com/Jxl-s/LeetWrite',
		stack: ['Next.js', 'Tailwind CSS', 'Socket.IO', 'OpenAI']
	}
];

export default projects;

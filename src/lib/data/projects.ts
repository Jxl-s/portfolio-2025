import type { LanguageKeys } from '$lib/i18n/translations';

interface Project {
	demo?: string;
	source?: string;

	name: LanguageKeys;
	description: LanguageKeys[];
	year: number;
	stack: string[];

	thumbnail: string;
}

const projects: Project[] = [
	{
		name: 'leetwrite',
		description: ['leetwrite.description_1', 'leetwrite.description_2'],
		year: 2025,

		demo: 'https://devpost.com/software/leetwrite',
		source: 'https://github.com/Jxl-s/LeetWrite',

		stack: ['Next.js', 'Tailwind CSS', 'Socket.IO', 'OpenAI'],
		thumbnail: '/images/projects/2025-leetwrite.webp'
	},
	{
		name: 'aicademy',
		description: ['aicademy.description_1', 'aicademy.description_2'],
		year: 2025,

		demo: 'https://devpost.com/software/ai-cademy',
		source: 'https://github.com/puripuriprince/bagelvoice',

		stack: ['Next.js', 'PyTorch', 'LangChain'],
		thumbnail: '/images/projects/2025-ai-cademy.webp'
	}
];

export default projects;

const translations = {
	en: {
		'montreal, canada': 'Montreal, Canada',

		'concordia.title': 'Concordia University',
		'concordia.degree': 'Bachelor of Science in Computer Science',
		'concordia.graduation': 'Expected: May 2026',
		'concordia.grade': 'GPA: 4.3/4.3',

		'vanier.title': 'Vanier College',
		'vanier.degree': 'Technical DEC in Computer Science Technology',
		'vanier.graduation': 'May 2024',
		'vanier.grade': 'R-Score: 35.0',

		'ndt.position': 'Software Development Intern',
		'ndt.dates': 'Jan 2024 - Aug 2024',
		'ndt.description':
			'Developed web reports and C++ desktop applications for data processing and analysis.',

		leetwrite: 'LeetWrite',
		'leetwrite.description_1': 'Won 2nd place at ConUHacks IX (2025), as a solo team.',
		'leetwrite.description_2': 'LeetCode, but you explain code instead of writing code.'
	},
	fr: {
		'montreal, canada': 'Montréal, Canada',

		'concordia.title': 'Université Concordia',
		'concordia.degree': 'Baccalauréat en informatique',
		'concordia.graduation': 'Prévu: Mai 2026',
		'concordia.grade': 'GPA: 4.3/4.3',

		'vanier.title': 'Collège Vanier',
		'vanier.degree': "DEC technique en technologie de l'informatique",
		'vanier.graduation': 'Mai 2024',
		'vanier.grade': 'Cote-R: 35.0',

		'ndt.position': 'Stagiaire en développement logiciel',
		'ndt.dates': 'Jan 2024 - Août 2024',
		'ndt.description':
			'Développé des tableaux de bord et des applications en C++ pour analyser des données.',

		leetwrite: 'LeetWrite',
		'leetwrite.description_1':
			"Remporté la 2e place à ConUHacks IX (2025), en tant qu'équipe solo.",
		'leetwrite.description_2': "LeetCode, mais vous expliquez du code au lieu d'écrire du code."
	}
} as const;

export type Languages = keyof typeof translations;
export type LanguageKeys = keyof (typeof translations)['en'];

export default translations;

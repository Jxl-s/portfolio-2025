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
	},
	cn: {
		'montreal, canada': '加拿大蒙特利尔',

		'concordia.title': '康考迪亚大学',
		'concordia.degree': '计算机科学学士',
		'concordia.graduation': '预计: 2026年5月',
		'concordia.grade': 'GPA: 4.3/4.3',

		'vanier.title': '范尼尔学院',
		'vanier.degree': '计算机科学技术技术DEC',
		'vanier.graduation': '2024年5月',
		'vanier.grade': 'R分数: 35.0',

		'ndt.position': '软件开发实习生',
		'ndt.dates': '2024年1月 - 2024年8月',
		'ndt.description': '为数据处理和分析开发Web报告和C++桌面应用程序。',

		leetwrite: 'LeetWrite',
		'leetwrite.description_1': '在ConUHacks IX（2025）中获得第二名，作为独立团队。',
		'leetwrite.description_2': 'LeetCode，但您解释代码而不是编写代码。'
	}
} as const;

export type Languages = keyof typeof translations;
export type LanguageKeys = keyof (typeof translations)['en'];

export default translations;

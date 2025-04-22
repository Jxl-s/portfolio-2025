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
		'leetwrite.description_2': 'LeetCode, but you explain code instead of writing code.',

		aicademy: 'AI-Cademy',
		'aicademy.description_1':
			'An expressive AI-powered learning platform, that speaks through voice and generates videos on the fly.',
		'aicademy.description_2':
			'Achieved real-time voice responsiveness while maintaining voice quality.'
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
		'leetwrite.description_2': "LeetCode, mais vous expliquez du code au lieu d'écrire du code.",

		aicademy: 'AI-Cademy',
		'aicademy.description_1':
			"Une platform d'apprentissage expressif alimentée par l'IA, qui s'exprime par la voix et génère des vidéos sur demande.",
		'aicademy.description_2':
			'Atteind une réactivité vocale en temps réel tout en maintenant une bonne qualité de la voix.'
	},
	// TODO: 自己写中文翻译
	cn: {
		'montreal, canada': '加拿大蒙特利尔',

		'concordia.title': 'Concordia 大学',
		'concordia.degree': '计算机科学学士',
		'concordia.graduation': '预计: 2026年5月',
		'concordia.grade': 'GPA: 4.3/4.3',

		'vanier.title': 'Vanier 学院',
		'vanier.degree': '计算机科学DEC',
		'vanier.graduation': '2024年5月',
		'vanier.grade': 'R-Score: 35.0',

		'ndt.position': '软件开发实习生',
		'ndt.dates': '2024年1月 - 2024年8月',
		'ndt.description': '为数据处理和分析开发Web报告和C++桌面应用程序。',

		leetwrite: 'LeetWrite',
		'leetwrite.description_1': '在ConUHacks IX（2025）中获得第二名，作为独立团队。',
		'leetwrite.description_2': 'LeetCode，但您解释代码而不是编写代码。',

		aicademy: 'AI-Cademy',
		'aicademy.description_1':
			'一个富有表现力的AI驱动学习平台，通过语音与用户互动，并能够实时生成视频。',
		'aicademy.description_2': '在保持语音质量的同时，实现了实时语音响应。'
	}
} as const;

export type Languages = keyof typeof translations;
export type LanguageKeys = keyof (typeof translations)['en'];

export default translations;

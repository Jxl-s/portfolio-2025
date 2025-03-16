interface Work {
	company: string;
	position: string;
	dates: string;
	location: string;
	description: string;
	website?: string;
}

const workExperience: Work[] = [
	{
		company: 'NDT Technologies Inc.',
		position: 'Software Development Intern',
		dates: 'Jan 2024 - Aug 2024',
		location: 'Montreal, Canada',

		description:
			'Developed web reports and C++ desktop applications for data processing and analysis.',
		website: 'https://ndt.ca'
	}
];

export default workExperience;

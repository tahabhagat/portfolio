import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Technology, Electronics and Computer Engineering',
		description:
			'Capstone project: Intelligent Traffic Light Control System, an AI object-detection-based adaptive signal timing system.',
		location: 'Pune, IN',
		logo: Assets.Mit,
		name: 'Bachelor of Technology',
		organization: 'Maharashtra Institute of Technology',
		period: { from: new Date(2019, 4, 1), to: new Date(2023, 4, 31) },
		shortDescription: '',
		slug: 'b-tech',
		subjects: [
			'Data Structures & Algorithms',
			'Data Science and Analytics',
			'DBMS',
			'Machine Learning',
			'Computer Networks',
			'Embedded Systems'
		]
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';

import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors of Technology, Electronics and Computer Engineering',
		description: 'Mixed Bachelors ',
		location: 'India',
		logo: Assets.Unknown,
		name: 'Bachelors of Technology',
		organization: 'MIT ADT',
		period: { from: new Date(2019, 5, 1), to: new Date(2023, 5,0) },
		shortDescription: '',
		slug: 'b-tech',
		subjects: ['C', 'Java', 'Python', 'Embedded Systems', 'Machine Learning', 'Data Science']
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

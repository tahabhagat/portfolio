import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Taha';

export const lastName = 'Bhagat';

export const description =
	'Full-stack software engineer and data engineer with experience building clinical study automation, AI-enabled data ingestion, and high-throughput AIOps pipelines. Skilled in Python, Java, FastAPI, Spring Boot, Apache Spark, Kafka, MongoDB, and Kubernetes.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/tahabhagat' },
	{
		platform: Platform.Linkedin,
		link: 'https://linkedin.com/in/taha-bhagat/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'tahabhagat8@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('python', 'java', 'spark', 'kafka', 'fastapi', 'mongodb', 'k8s');

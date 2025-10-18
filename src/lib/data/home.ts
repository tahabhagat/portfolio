import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Taha';

export const lastName = 'Bhagat';

export const description = 'Full stack developer and data engineer specializing in Java, Python, Machine Learning, and LLMs. Experienced in deploying scalable systems with Docker and Kubernetes, and building performant web applications using FastAPI, Spring Boot, and Vue.js. Skilled in designing streaming and batch pipelines with Apache Spark and Kafka, and managing data in ArangoDB, OpenSearch, and PostgreSQL. Background includes extensive work with ITIL datasets across ITSM, ESM, and CMDB domains.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/tahabhagat' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/taha-bhagat-652540247/'
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

export const skills = getSkills('spark','java','kafka','python','springboot','fastapi','vuejs',);

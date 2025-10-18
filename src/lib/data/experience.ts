import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'lti',
		company: 'LTIMindtree',
		description: 'Developed and optimised data processing pipelines using Apache Spark and Kafka for AIOPS data for various clients, ensuring high performance and reliability. Worked with AI/ML frameworks and generative AI for intelligent data insights and automation. Built and maintained full stack applications using Spring Boot, FastAPI, and Vue.js to support data operations and user interactions. Managed containerized applications with Docker and Kubernetes for scalable deployments. Handled databases like ArangoDB, OpenSearch, and PostgreSQL for efficient data storage and retrieval. Collaborated in an Agile environment, participating in code reviews, sprint planning, and continuous integration/continuous deployment (CI/CD) processes to ensure high-quality software delivery.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'India',
		period: { from: new Date(2023,6,27) },
		skills: getSkills('spark','kafka','springboot', 'arangodb', 'postgresql', 'docker', 'k8s', 'fastapi', 'vuejs'),
		name: 'Software Engineer',
		color: 'yellow',
		links: [],
		logo: Assets.Lti,
		shortDescription: 'Full stack software and data engineer.'
	},
];

export const title = 'Experience';

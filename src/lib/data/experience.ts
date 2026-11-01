import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'fresh-gravity',
		company: 'Fresh Gravity',
		description:
			'Contributed across the full stack to Lifio Clinical Study Automation (CSAT), using FastAPI, AngularJS, and MongoDB. Developed eCRF prediction workflows for document digitisation, table extraction, and CRF prediction; built an ingestion tool for CRFs and DVCs with AI-enabled mapping suggestions; and led SAML-based SSO integration across Lifio applications.',
		contract: ContractType.FullTime,
		type: 'Data Management',
		location: 'Remote',
		period: { from: new Date(2026, 1, 1) },
		skills: getSkills('fastapi', 'angularjs', 'mongodb', 'python'),
		name: 'Analyst, Data Management',
		color: 'green',
		links: [{ label: 'Lifio CSAT', to: 'https://lifio.ai/csat', newTab: true }],
		logo: Assets.Unknown,
		shortDescription: 'Building clinical study automation and data ingestion tools.'
	},
	{
		slug: 'lti',
		company: 'LTIMindtree',
		description:
			'Contributed to AIOps capabilities in the Blueverse platform, consolidating operations data and enabling AI-powered insights and automation. Engineered real-time data pipelines processing more than 1,000 events per second; built a low-code ETL pipeline builder; developed Spark-based pipeline observability that reduced downtime by over 60%; and delivered batch integrations that reduced manual effort by 80%. Set up and optimised Kafka clusters on Kubernetes, increasing event throughput by 30%.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bengaluru, Mumbai, Pune',
		period: { from: new Date(2023, 5, 1), to: new Date(2026, 0, 31) },
		skills: getSkills(
			'spark',
			'kafka',
			'springboot',
			'arangodb',
			'postgresql',
			'docker',
			'k8s',
			'fastapi',
			'vuejs'
		),
		name: 'Software Engineer',
		color: 'yellow',
		links: [],
		logo: Assets.Lti,
		shortDescription: 'Full stack software and data engineer.'
	},
];

export const title = 'Experience';

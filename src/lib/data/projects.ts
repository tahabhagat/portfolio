import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'streaming-pipelines',
		color: '#ff3e00',
		description:
			'Engineered high-performance pipelines for real-time IT operations data integration, processing more than 1,000 events per second into SQL and NoSQL databases. Used Kafka and Spark to deliver reliable, scalable data processing.',
		shortDescription: 'Real-time IT operations data pipelines processing 1,000+ events per second.',
		links: [],
		logo: Assets.Spark,
		name: 'Streaming Pipelines',
		period: {
			from: new Date(2023,8,27), to: new Date(2025, 8, 26)
		},
		skills: getSkills('spark', 'kafka', 'arangodb', 'postgresql'),
		type: 'Data Integration',
	},
	{
		slug:'cmdb-processing',
		color:'#f2b632',
		description:'Developed Apache Spark batch pipelines to integrate service catalog data, configuration items, and their relationships for deeper analysis, reducing manual effort by 80%.',
		shortDescription:'Batch integration of service catalog data and configuration items.',
		links:[],
		logo:Assets.Batch,
		name:'CMDB Processing',
		period:{
			from:new Date(2025, 2,27), to: new Date(2025, 8, 24)
		},
		skills:getSkills('spark','springboot','arangodb', 'java'),
		type:'Data Integration'
	},
	{
		slug: 'pipeline-builder',
		color: '#5e95e3',
		description:
			'Users could visually design data pipelines by dragging and dropping components onto a canvas, connecting them to define data flow, and configuring each component through intuitive forms. The backend, built with Spring Boot and Apache Spark, handled the execution of these pipelines, ensuring scalability and reliability. The frontend was built using VueFlow and Vue.js, providing a seamless and interactive user experience.',
		shortDescription:
			'A GUI Based data pipeline builder to create and manage data pipelines with ease.',
		links: [],
		logo: Assets.DataEngg	,
		name: 'Data Pipeline Builder',
		period: {
			from: new Date(2023,8,27), to: new Date(2024, 8, 21)
		},
		skills: getSkills('spark', 'springboot', 'vuejs', 'postgresql', 'java'),
		type: 'Full Stack Application'
	},
	{
		slug:'pipeline-audit',
		color:'#34a853',
		description:'Architected a Spark-based audit system that captured pipeline transformations and events, improving observability and reducing downtime by over 60%.',
		shortDescription:'Spark-based pipeline observability and audit system.',
		links:[],
		logo:Assets.Audit,
		name:'Pipeline Audit',
		period:{
			from:new Date(2024, 8, 27), to: new Date(2025, 2, 25)
		},
		skills:getSkills('spark','kafka', 'opensearch'),
		type:'Data Governance'
	},
	{
		slug:'high-score-rest-api',
		color: '#4caf50',
		description:'Built and maintained an open-source RESTful application with Rocket and Diesel to track and manage leaderboards for online games.',
		shortDescription:'Open-source RESTful leaderboard application for online games.',
		links:[{'label':'GitHub','to':'https://github.com/tahabhagat/high-score-application',newTab:true}],
		logo:Assets.Rust,
		name:'High Score Application',
		skills:getSkills('rust', 'rocket', 'diesel','sqlite'),
		type:'Backend Development'
	},
	{
		slug: 'raads-r-self-assessment',
		color: '#5e95e3',
		description:
			'Built and maintained an application for self-assessment using the Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R).',
		shortDescription: 'A self-assessment application for the RAADS-R questionnaire.',
		links: [{ label: 'GitHub', to: 'https://github.com/tahabhagat/raads-r', newTab: true }],
		logo: Assets.Unknown,
		name: 'RAADS-R Self Assessment Application',
		skills: getSkills('nextjs', 'bun', 'tauri'),
		type: 'Application Development'
	},
	{
		slug: 'snake-game',
		color: '#34a853',
		description:
			'Migrated the application from Flask, SQLAlchemy, and pip to FastAPI, SQLModel, and uv, improving developer experience and lowering request latency.',
		shortDescription: 'Migrated a Flask application to FastAPI and SQLModel.',
		links: [{ label: 'GitHub', to: 'https://github.com/LOCKhart07/snake-game', newTab: true }],
		logo: Assets.FastApi,
		name: 'Snake Game',
		skills: getSkills('python', 'fastapi'),
		type: 'Backend Development'
	},
	{
		slug:'itlcs',
		color:'#0277bd',
		description:'Built an AI object-detection-based adaptive signal timing system to analyse real-time traffic density and optimise traffic signal timings.',
		shortDescription:'AI-powered traffic signal timing based on real-time vehicle detection.',
		links:[{'label':'Github', 'to':'https://github.com/tahabhagat/ITLCS'}],
		logo:Assets.Python,
		period:{
			from:new Date(2022, 4,0), to: new Date(2022, 9, 27)
		},
		skills:getSkills('python', 'opencv', 'yolo'),
		name:'Intelligent Traffic Light Control System',
		type:'AI/ML Project'
	}
];

export const title = 'Projects';

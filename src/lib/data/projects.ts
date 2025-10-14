import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'pipeline-builder',
		color: '#5e95e3',
		description:
			'Users could visually design data pipelines by dragging and dropping components onto a canvas, connecting them to define data flow, and configuring each component through intuitive forms. The backend, built with Spring Boot and Apache Spark, handled the execution of these pipelines, ensuring scalability and reliability. The frontend was build using VueFlow and Vue.js, providing a seamless and interactive user experience.',
		shortDescription:
			'A GUI Based data pipeline builder to create and manage data pipelines with ease.',
		links: [],
		logo: Assets.Unknown,
		name: 'Data Pipeline Builder',
		period: {
			from: new Date()
		},
		skills: getSkills('spark', 'springboot', 'vuejs'),
		type: 'Full Stack Application'
	},
	{
		slug: 'streaming-pipelines',
		color: '#ff3e00',
		description:
			'Developed robust streaming data pipelines using Apache Kafka and Apache Spark to facilitate real-time data integration and processing. These pipelines were designed to handle high-throughput data streams, ensuring low-latency processing and delivery. Leveraged Kafka\'s distributed messaging system for reliable data ingestion and Spark\'s powerful processing capabilities for real-time analytics and transformations. Implemented fault-tolerance and scalability features to maintain pipeline performance under varying loads, ensuring seamless data flow across systems. Optimised existing pipelines, refactoring join conditions and replacing UDFs to improve performance and reduce latency.',
		shortDescription:
			'Streaming pipelines using Apache Kafka and Apache Spark for real-time data integration',
		links: [],
		logo: Assets.Spark,
		name: 'Streaming Pipelines',
		period: {
			from: new Date()
		},
		skills: getSkills('spark', 'kafka'),
		type: 'Data Integration',
	},
	{
		slug:'cmdb-processing',
		color:'#f2b632',
		description:'Developed performant batch processing pipelines using Apache Spark to efficiently process and transform large-scale CMDB datasets. These pipelines leveraged Apache Spark\'s distributed computing capabilities to handle processing and integration of large amounts of semi-structured CMDB data.',
		shortDescription:'Batch processing pipelines for CMDB datasets',
		links:[],
		logo:Assets.Spark,
		name:'CMDB Processing',
		period:{
			from:new Date()
		},
		skills:getSkills('spark', 'arangodb'),
		type:'Data Integration'
	},
	{
		slug:'pipeline-audit',
		color:'#34a853',
		description:'Implemented a comprehensive auditing system for data pipelines, capturing detailed logs of data transformations, user actions, and system events. This system provided transparency and traceability, enabling users to monitor pipeline activities and ensure data integrity throughout the processing lifecycle.',
		shortDescription:'Auditing system for data pipelines to ensure transparency and traceability',
		links:[],
		logo:Assets.Spark,
		name:'Pipeline Audit',
		period:{
			from:new Date()
		},
		skills:getSkills('spark', 'opensearch'),
		type:'Data Governance'
	},
	{
		slug:'high-score-rest-api',
		color: '#4caf50',
		description:'Designed and developed a RESTful API to manage scores for an online game using Rust Rocket and Diesel ORM. Leveraged Rust\'s performance and safety features to build a high-performance backend capable of handling concurrent requests with low latency.',
		shortDescription:'RESTful API for managing game scores',
		links:[{'label':'GitHub','to':'https://github.com/tahabhagat/high-score-application',newTab:true}],
		logo:Assets.Rust,
		name:'High Score REST API',
		period:{
			from:new Date()
		},
		skills:getSkills('rust', 'rocket', 'diesel','sqlite'),
		type:'Backend Development'
	},
	{
		slug:'itlcs',
		color:'#0277bd',
		description:'Designed and implemented and AI powered system using Object detection to analyse real time density and dynamically optimise signal timings at intersections to reduce congestion and improve traffic flow. The system leveraged computer vision techniques to monitor traffic conditions and make real-time adjustments to signal timings based on traffic density and patterns.',
		shortDescription:'AI powered traffic light control system to reduce congestion and improve traffic flow',
		links:[],
		logo:Assets.Python,
		period:{
			from:new Date()
		},
		skills:getSkills('python', 'opencv', 'yolo'),
		name:'Intelligent Traffic Light Control System',
		type:'AI/ML Project'
	}
];

export const title = 'Projects';

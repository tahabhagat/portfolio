import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color:'orange',
		description:'Skilled in core Java, as well as using frameworks such as SpringBoot, Apache Spark, and ORMs such as JPA to architect and develop performant web applications.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
		defineSkill({
		slug:'python',
		color:'yellow',
		description: 'Experience in using Python to rapidly develop and implement POCs using frameworks like streamlit, as well as develop production grade applications using FastAPI, SQLModel, and machine learning solutions with PyTorch and scikit-learn. ',
		logo:Assets.Python,
		name:'Python',
		category:"pro-lang"
	}),
	defineSkill({
		slug:'rust',
		color:'red',
		description:'Rust novice, participated in advent of code 2024 using Rust as well as developed RESTful APIs.',
		logo:Assets.Rust,
		name:'Rust',
		category:'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Developed responsive and extensible frontends using javascript, specifically using the VueJS framework. Worked on a Data Pipeline builder using VueFlow and Vue.Js to allow users to interactively design their own pipelines.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'spark',
		color:'orange',
		description:'Extensively used Apache Spark to develop performant and robust Streaming and Batch data integration solutions.',
		logo: Assets.Spark,
		name: 'Spark',
		category: 'framework'
	}),
	defineSkill({
		slug:'kafka',
		color:'blue',
		description:'Setup Apache Kafka cluster on kubernetes using Strimzi, and created and optimised topics for data integration and processing.',
		logo:Assets.Kafka,
		name: 'Kafka',
		category: 'framework'
	}),
	defineSkill({
		slug:'springboot',
		color:'green',
		description:"Used Springboot for developing secure and fast RESTful APIs in multi-tenant and single-tenant environments, as well as using websockets and webflux for reactive, streamed data.",
		logo:Assets.SpringBoot,
		name:'SpringBoot',
		category:'library'
	}),
	defineSkill({
		slug:'fastapi',
		color:'cyan',
		description:'Used FAST Api for secure and fast RESTful APIs as well as implementing SSE for streaming data.',
		logo:Assets.FastApi,
		name:'FastAPI',
		category:'library'
	}),
	defineSkill({
		slug:'vuejs',
		color:'green',
		description:'Used Vue.js extensively for developing data observability dashboards, as well as a data pipeline builder for users to build data integration pipelines in an interactive, low code approach.',
		logo:Assets.VueJs,
		name:'Vue.js',
		category:'library',
	}),
	defineSkill({
		slug:'k8s',
		color:'blue',
		description:'Experience in k8s; setting up and deploying secure Kafka and database clusters, setting up secure service accounts for Spark deployments, and deploying Java, Python and JS applications.',
		logo:Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug:'docker',
		color:'blue',
		description:'Experience in Docker deploying python and java applications with a focus on secure images with no vulnerabilities.',
		logo:Assets.Docker,
		name:'Docker',
		category:'devops'
	}),
	defineSkill({
		slug:'postgresql',
		color:'blue',
		description:'Experience with SQL databases, using JDBC to large amounts of data as well as optimising SQL queries',
		logo:Assets.PostgreSQL,
		name:'PostgreSQL',
		category:'db'
	}),
	defineSkill({
		slug:'arangodb',
		color:'blue',
		description:'Designing graph based databases in arangodb, as well as writing performant queries to warehouse large amounts of data.',
		logo:Assets.ArangoDB,
		name:'ArangoDB',
		category:'db'
	}),
	defineSkill({
		slug:'opensearch',
		color:'blue',
		description:'Experience using indices and data-streams to deal with large amounts of time series and audit data.',
		logo:Assets.OpenSearch,
		name:'OpenSearch',
		category:'db'
	}),
	defineSkill({
		slug: 'angularjs',
		color: 'red',
		description: 'Developed and maintained full-stack features for Lifio Clinical Study Automation using AngularJS.',
		logo: Assets.Angular,
		name: 'AngularJS',
		category: 'library'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'Used MongoDB for clinical study automation and ingestion applications.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'Experience working with relational databases including MySQL.',
		logo: Assets.Unknown,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sqlite',
		color: 'blue',
		description: 'Used SQLite with Rust applications built using Rocket and Diesel.',
		logo: Assets.Unknown,
		name: 'SQLite',
		category: 'db'
	}),
	defineSkill({
		slug: 'elasticsearch',
		color: 'blue',
		description: 'Experience with search and analytics databases, including Elasticsearch.',
		logo: Assets.Unknown,
		name: 'Elasticsearch',
		category: 'db'
	}),
	defineSkill({
		slug: 'chromadb',
		color: 'purple',
		description: 'Experience using ChromaDB for vector data.',
		logo: Assets.Unknown,
		name: 'ChromaDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'langchain',
		color: 'green',
		description: 'Used LangChain for AI-enabled application workflows.',
		logo: Assets.Unknown,
		name: 'LangChain',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description: 'Built the RAADS-R self-assessment application with Next.js.',
		logo: Assets.Unknown,
		name: 'Next.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'bun',
		color: 'orange',
		description: 'Used Bun in the RAADS-R self-assessment application.',
		logo: Assets.Unknown,
		name: 'Bun',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'tauri',
		color: 'blue',
		description: 'Used Tauri to build the RAADS-R application as a desktop app.',
		logo: Assets.Unknown,
		name: 'Tauri',
		category: 'framework'
	}),
	defineSkill({
		slug: 'rocket',
		color: 'red',
		description: 'Built RESTful applications using the Rocket web framework for Rust.',
		logo: Assets.Unknown,
		name: 'Rocket.rs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'diesel',
		color: 'orange',
		description: 'Used Diesel as the ORM for Rust applications.',
		logo: Assets.Unknown,
		name: 'Diesel.rs',
		category: 'orm'
	}),
	defineSkill({
		slug: 'websockets',
		color: 'blue',
		description: 'Built real-time application features using WebSockets.',
		logo: Assets.Unknown,
		name: 'WebSockets',
		category: 'library'
	}),
	defineSkill({
		slug: 'sse',
		color: 'blue',
		description: 'Implemented Server-Sent Events (SSE) for streaming application data.',
		logo: Assets.Unknown,
		name: 'SSE',
		category: 'library'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Used Git for version control and collaborative software development.',
		logo: Assets.Unknown,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'cicd',
		color: 'blue',
		description: 'Worked with CI/CD practices for software delivery.',
		logo: Assets.Unknown,
		name: 'CI/CD',
		category: 'devops'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'Built web interfaces using HTML and CSS.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Styled responsive web interfaces using CSS.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'opencv',
		color: 'blue',
		description: 'Applied computer vision techniques in an intelligent traffic signal project.',
		logo: Assets.Unknown,
		name: 'OpenCV',
		category: 'library'
	}),
	defineSkill({
		slug: 'yolo',
		color: 'purple',
		description: 'Used object detection for an intelligent traffic signal project.',
		logo: Assets.Unknown,
		name: 'YOLO',
		category: 'library'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

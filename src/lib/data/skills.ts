import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
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

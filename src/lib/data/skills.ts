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
		description:'Java',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
		defineSkill({
		slug:'python',
		color:'yellow',
		description:"Python",
		logo:Assets.Python,
		name:'Python',
		category:"pro-lang"
	}),
	defineSkill({
		slug:'rust',
		color:'red',
		description:'Rustlang',
		logo:Assets.Rust,
		name:'Rust',
		category:'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'spark',
		color:'orange',
		description:'Apache Spark',
		logo: Assets.Spark,
		name: 'Spark',
		category: 'framework'
	}),
	defineSkill({
		slug:'kafka',
		color:'blue',
		description:'Apache Kafka',
		logo:Assets.Kafka,
		name: 'Kafka',
		category: 'framework'
	}),
	defineSkill({
		slug:'springboot',
		color:'green',
		description:"Spring Boot",
		logo:Assets.SpringBoot,
		name:'SpringBoot',
		category:'library'
	}),
	defineSkill({
		slug:'fastapi',
		color:'cyan',
		description:'Fast API',
		logo:Assets.FastApi,
		name:'FastAPI',
		category:'library'
	}),
	defineSkill({
		slug:'vuejs',
		color:'green',
		description:'Vue.JS',
		logo:Assets.VueJs,
		name:'Vue.js',
		category:'library',
	}),
	defineSkill({
		slug:'k8s',
		color:'blue',
		description:'Kubernetes',
		logo:Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug:'docker',
		color:'blue',
		description:'Docker',
		logo:Assets.Docker,
		name:'Docker',
		category:'devops'
	}),
	defineSkill({
		slug:'postgresql',
		color:'blue',
		description:'PostgreSQL',
		logo:Assets.PostgreSQL,
		name:'PostgreSQL',
		category:'db'
	}),
	defineSkill({
		slug:'arangodb',
		color:'blue',
		description:'ArangoDB',
		logo:Assets.ArangoDB,
		name:'ArangoDB',
		category:'db'
	}),
	defineSkill({
		slug:'opensearch',
		color:'blue',
		description:'OpenSearch',
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

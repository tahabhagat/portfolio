<script lang="ts">
	import type { Endorsement } from '$lib/types';
	import { getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import { theme } from '$lib/stores/theme';

	export let endorsement: Endorsement;

	// force reactivity on theme changes for asset URLs
	$: void $theme;

	const from = `${getMonthName(
		endorsement.period.from.getMonth()
	)} ${endorsement.period.from.getFullYear()}`;
	const to = endorsement.period.to
		? `${getMonthName(endorsement.period.to.getMonth())} ${endorsement.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to}`;

	$: info = [
		{ label: endorsement.role + " at " + endorsement.organization.company, icon: 'i-carbon-building' },
		{ label: endorsement.organization.location, icon: 'i-carbon-location' },
	] as const;
</script>

<Card
	margin="0px 0px 20px 0px"
	tiltDegree={2}
	href={endorsement.link.to}
	color={endorsement.organization.color}
>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<CardLogo
			src={getAssetURL(
				endorsement.profileImage ? endorsement.profileImage : endorsement.organization.logo
			)}
			alt={endorsement.organization.company}
			size={55}
		/>
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={endorsement.person} />
				</h3>
				<div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
					{#each info as item}
						<Chip>
							<UIcon icon={item.icon} />
							<span class="m-l-1">{item.label}</span>
						</Chip>
					{/each}
				</div>
				<div
					class="row flex-wrap items-start m-b-2 gap-1 text-0.8em font-300 text-[var(--accent-text)]"
				>
					<Chip>
						<UIcon icon="i-carbon-user-identity" />
						<span class="m-l-1">{endorsement.relation}</span>
					</Chip>
				</div>
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
					{period}
				</div>
				<CardDivider />
			</div>
			<div class="endorsement-description text-[0.9em] italic">{endorsement.endorsement}</div>
		</div>
	</div>
</Card>

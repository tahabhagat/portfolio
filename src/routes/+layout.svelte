<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	onMount(() => onHydrated());
</script>

<div class={`body contents terminal ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0 0;
	}

	.body {
		margin: 0;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f),sans-serif;
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0;
	}
</style>

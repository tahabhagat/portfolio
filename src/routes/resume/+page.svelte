<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	// Build a safe URL to the static PDF (served from /static at the root)
	const pdfUrl = data ? `/${encodeURIComponent(data)}` : null;
</script>

<CommonPage {title}>
	<div class="resume terminal-box">
		{#if pdfUrl}
			<!-- Display the PDF inline -->
			<object class="pdf-viewer" data={pdfUrl} type="application/pdf" title="Resume PDF">
				<iframe class="pdf-viewer" src={pdfUrl} title="Resumé PDF"></iframe>
				<div class="fallback">
					<Chip size={'1.25em'}>
						Your browser can't display PDFs. You can download it instead.
					</Chip>
					<div class="download">
						<a href={pdfUrl} download>
							<Chip size={'1.25em'}>Download</Chip>
						</a>
					</div>
				</div>
			</object>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		margin-top: 20px;
	}

	.pdf-viewer {
		width: 100%;
		height: 85vh;
		border: none;
	}

	.fallback {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 16px;
	}

	.download a { color: inherit; }
</style>

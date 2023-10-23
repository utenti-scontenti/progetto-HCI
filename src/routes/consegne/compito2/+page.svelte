<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';

	import Content from './Content_02.md';
</script>

<Prose>
	<Content />
</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito2/Utenti Scontenti - Raffinamento e focus.pdf"
		fileName="Utenti Scontenti - Raffinamento e focus.pdf"
	/>
</div>

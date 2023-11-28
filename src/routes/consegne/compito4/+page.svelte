<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';

	import Content from './Content_04.md';
</script>

<Prose>
	<Content />
</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito4/Utenti Scontenti - Raffinamento del prototipo e documento preparatorio per la valutazione.pdf"
		fileName="Utenti Scontenti - Raffinamento del prototipo e documento preparatorio per la valutazione.pdf"
	/>
</div>

<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';

	import Content from './Content_03.md';
</script>

<Prose>
	<Content />
</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito3/Utenti Scontenti - Task e Prototipi Low Fidelity.pdf"
		fileName="Utenti Scontenti - Task e Prototipi Low Fidelity.pdf"
	/>
</div>

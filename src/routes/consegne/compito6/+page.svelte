<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';

	import Content from './Content_06.md';
</script>

<Prose>
	<Content />
</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Presentazione compito 6.pdf"
		fileName="Utenti Scontenti - Presentazione compito 6.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Questionario anagrafico.pdf"
		fileName="Utenti Scontenti - Questionario anagrafico.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Script.pdf"
		fileName="Utenti Scontenti - Script.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Indici di successo.pdf"
		fileName="Utenti Scontenti - Indici di successo.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Report correzioni.pdf"
		fileName="Utenti Scontenti - Report correzioni.pdf"
	/>
</div>

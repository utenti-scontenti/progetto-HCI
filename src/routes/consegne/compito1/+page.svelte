<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';

	import Content from './Content_01.md';
	import PdfAttachment from './PdfAttachment.svelte';
</script>

<Prose>
	<Content />
</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment src="{base}/consegne/compito1/slides.pdf" fileName="slides.pdf" />
</div>

<script>
	import Prose from '$lib/Prose.svelte';

	import Slides from './Slides.svelte';
	import Content from './Content_01.md';
</script>

<Prose>
	<Content />
</Prose>

<Slides pdfPath="/consegne/compito1/slides.pdf" downloadName="slides.pdf" />

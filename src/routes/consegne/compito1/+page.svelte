<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';

	import Slides from './Slides.svelte';
	import Content from './Content_01.md';
</script>

<Prose>
	<Content />
</Prose>

<Slides src="{base}/consegne/compito1/slides.pdf" fileName="slides.pdf" />

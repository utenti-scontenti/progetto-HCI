<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';
</script>

<Prose>

# Consegna 1: Needfinding

Alleghiamo qui sotto l'elaborato del primo compito.

</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito1/Utenti Scontenti - needfinding.pdf"
		fileName="Utenti Scontenti - needfinding.pdf"
	/>
</div>

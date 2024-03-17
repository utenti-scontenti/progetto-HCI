<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import Attachment from '$lib/Attachment.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';
</script>

<Prose>

# Presentazione finale

Alleghiamo qui sotto la presentazione finale.

</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/finale/Utenti Scontenti - Presentazione finale.pdf"
		fileName="Utenti Scontenti - Presentazione finale.pdf"
	/>
</div>

<Prose>

In caso di problemi di visualizzazione, alleghiamo anche i video che sono linkati all'interno della presentazione.

</Prose>

<div class="container mx-auto my-8 px-8">
	<Attachment
		src="{base}/finale/video/Showcase prototipi 1.mp4"
		fileName="Showcase prototipi 1.mp4"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<Attachment
		src="{base}/finale/video/Showcase prototipi 2.mp4"
		fileName="Showcase prototipi 2.mp4"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<Attachment
		src="{base}/finale/video/Showcase prototipi 3.mp4"
		fileName="Showcase prototipi 3.mp4"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<Attachment src="{base}/finale/video/Problema 1.mp4" fileName="Problema 1.mp4" />
</div>

<div class="container mx-auto my-8 px-8">
	<Attachment src="{base}/finale/video/Problema 2.mp4" fileName="Problema 2.mp4" />
</div>

<div class="container mx-auto my-8 px-8">
	<Attachment src="{base}/finale/video/Problema 3.mp4" fileName="Problema 3.mp4" />
</div>

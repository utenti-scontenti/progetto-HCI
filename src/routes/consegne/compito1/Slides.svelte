<script>
	/**
	 * @type {string}
	 */
	export let pdfPath;

	/**
	 * @type {string}
	 */
	export let downloadName;

	import { FileDownIcon } from 'lucide-svelte';
	import { base } from '$app/paths';
</script>

<div class="container mx-auto m-8 space-y-8">
	<div class="mockup-window border bg-base-300">
		<iframe class="w-full aspect-video" src="{base}{pdfPath}" title="slides" frameborder="0" />
	</div>

	<div class="w-full flex flex-row-reverse">
		<a class="btn btn-primary btn-wide" href="{base}{pdfPath}" download={downloadName}
			><FileDownIcon class="h-6 w-6" />Download</a
		>
	</div>
</div>

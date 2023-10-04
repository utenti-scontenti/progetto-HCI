<script>
	/**
	 * @type {string}
	 */
	export let pdfPath;

	/**
	 * @type {string}
	 */
	export let downloadName;

	import { base } from '$app/paths';
</script>

<div class="container mx-auto m-8 space-y-8">
	<div class="mockup-window border bg-base-300">
		<iframe class="w-full aspect-video" src="{base}{pdfPath}" title="slides" frameborder="0" />
	</div>

	<div class="w-full flex flex-row-reverse">
		<a href="{base}{pdfPath}" download={downloadName}
			><button class="btn btn-primary btn-wide"> Download </button>
		</a>
	</div>
</div>

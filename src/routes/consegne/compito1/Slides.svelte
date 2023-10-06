<script>
	/**
	 * @type {string}
	 */
	export let src;

	/**
	 * @type {string}
	 */
	export let fileName;

	import { FileDownIcon } from 'lucide-svelte';
</script>

<div class="container mx-auto my-8 px-8 space-y-4">
	<div class="mockup-window border bg-base-300">
		<iframe class="w-full aspect-video" {src} title="slides" frameborder="0" />
	</div>

	<div class="w-full flex flex-row-reverse">
		<a class="btn btn-primary btn-wide" href={src} download={fileName}
			><FileDownIcon class="h-6 w-6" />Download</a
		>
	</div>
</div>

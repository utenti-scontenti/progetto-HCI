<script>
	/**
	 * @type {string}
	 */
	export let src;

	/**
	 * @type {string}
	 */
	export let fileName;

	import { onMount } from 'svelte';
	import { FileIcon, DownloadIcon } from 'lucide-svelte';

	let previewAvaiable = false;

	onMount(() => {
		previewAvaiable = !!window.navigator.pdfViewerEnabled;
	});
</script>

<div class="border-[1px] border-secondary-content rounded-2xl bg-base-300">
	<!-- main -->
	<div class="w-full p-4 flex flex-row justify-between items-center ">
		<div class="flex flex-row items-center px-4 space-x-2">
			<FileIcon />
			<p class="text-lg text-primary-content">{fileName}</p>
		</div>
		<a class="btn btn-ghost" href={src} download={fileName}><DownloadIcon />Download</a>
	</div>

	<!-- preview -->
	{#if previewAvaiable}
		<iframe
			class="hidden md:block w-full rounded-b-2xl aspect-video"
			{src}
			title="PDF attachment"
			frameborder="0"
		/>
	{/if}
</div>

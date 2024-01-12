<script>
	/**
	 * @type {string}
	 */
	export let src;

	/**
	 * @type {string}
	 */
	export let fileName;

	import Attachment from '$lib/Attachment.svelte';
	import { onMount } from 'svelte';

	let previewAvaiable = false;

	onMount(() => {
		previewAvaiable = !!window.navigator.pdfViewerEnabled;
	});
</script>

<Attachment {src} {fileName}>
	<!-- preview -->
	{#if previewAvaiable}
		<iframe
			class="hidden md:block w-full rounded-b-2xl aspect-video"
			{src}
			title="PDF attachment"
			frameborder="0"
		/>
	{/if}
</Attachment>

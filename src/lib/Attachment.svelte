<script>
	/**
	 * @type {string}
	 */
	export let src;

	/**
	 * @type {string}
	 */
	export let fileName;

	import { FileIcon, DownloadIcon } from 'lucide-svelte';
</script>

<div class="border-[1px] border-secondary-content rounded-2xl bg-base-300">
	<!-- main -->
	<div class="w-full p-4 flex flex-row justify-between items-center">
		<div class="text-base-content flex flex-row items-center px-4 space-x-2">
			<FileIcon />
			<p class="text-lg">{fileName}</p>
		</div>
		<a class="btn btn-ghost" href={src} download={fileName}><DownloadIcon />Download</a>
	</div>

	<!-- preview -->
	<slot />
</div>

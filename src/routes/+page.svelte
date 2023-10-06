<script>
	import Prose from '$lib/Prose.svelte';
	import Content from './Content.md';
</script>

<div class="mx-auto mt-8 mb-16 prose relative">
	<h1 class="text-9xl font-extrabold m-0">Utenti<br />Scontenti</h1>

	<p
		class="
			pointer-events-none
			-z-10 absolute right-0 bottom-0
			m-0 p-0
			text-[275px] font-extrabold text-base-200
			rotate-45 translate-y-20
		"
	>
		:(
	</p>
</div>

<Prose>
	<Content />
</Prose>

<style>
	:global(body) {
		width: 100vw;
		overflow-x: hidden;
	}
</style>

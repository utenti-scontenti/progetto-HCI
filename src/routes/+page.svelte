<script>
	import Prose from '$lib/Prose.svelte';
	import Content from './Content.md';
</script>

<div class="mx-auto mt-8 mb-16 max-w-2xl relative">
	<h1
		class="
			m-0
			font-extrabold
			text-8xl md:text-9xl
			text-center md:text-left
		"
	>
		Utenti<br />Scontenti
	</h1>

	<p
		class="
			pointer-events-none select-none
			m-0 p-0
			-z-10
			absolute right-0 bottom-0
			rotate-45 -translate-x-8 translate-y-16 md:translate-x-0 md:translate-y-20
			font-extrabold text-base-200
			text-[215px] md:text-[275px]
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

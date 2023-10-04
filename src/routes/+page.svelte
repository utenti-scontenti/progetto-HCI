<script>
	import { base } from '$app/paths';
</script>

<div class="mx-auto mb-32 prose relative">
	<p
		class="
			pointer-events-none
			-z-10 absolute right-0 bottom-0
			m-0 p-0
			text-[275px] font-extrabold text-[rgba(0,0,0,0.2)]
			rotate-45 translate-y-20
		"
	>
		:(
	</p>

	<p class="text-3xl font-bold mb-0">Gruppo</p>
	<h1 class="text-9xl font-extrabold">Utenti<br />Scontenti</h1>
</div>

<div class="prose mx-auto">
	<h2>Componenti</h2>
	<p>Poi metteremo qui dei contenuti</p>
	<h2>Consegne</h2>
	<ul>
		<li>
			<a href="{base}/consegne/compito1">Vai a consegna 1</a>
		</li>
	</ul>
</div>

<!-- fixme: absolute bottom-0 is ok only if there isn't enough content to fill the whole screen heigth -->
<footer class="absolute bottom-0 footer footer-center p-4 bg-base-300 text-base-content">
	<aside>
		<p>
			Sito realizzato per il corso di <span class="font-bold"
				>Fondamenti di <abbr title="Human-Computer Interaction">HCI</abbr> &ndash; a.a. 2023-24</span
			>
		</p>
	</aside>
</footer>

<style>
	:global(body) {
		width: 100vw;
		overflow-x: hidden;
	}
</style>

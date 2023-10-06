<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const pages = [
		{ name: 'Consegna 1', routeId: '/consegne/compito1' },
		{ name: 'Consegna 2', routeId: '/consegne/compito2' },
		{ name: 'Consegna 3', routeId: '/consegne/compito3' }
	];
</script>

<div class="min-h-screen flex flex-col">
	<nav class="navbar bg-base-200">
		<a class="btn btn-ghost normal-case text-xl font-bold" href="{base}/">Utenti Scontenti</a>

		<!-- TODO: responsive -->
		<ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
			{#each pages as p}
				<li>
					<a class:active={$page.route.id === p.routeId} href="{base}{p.routeId}">{p.name}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="flex-grow">
		<slot />
	</div>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<aside>
			<p>
				Sito realizzato per il corso di <span class="font-bold"
					>Fondamenti di <abbr title="Human-Computer Interaction">HCI</abbr> &ndash; a.a. 2023-24</span
				>
			</p>
		</aside>
	</footer>
</div>

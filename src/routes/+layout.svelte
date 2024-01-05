<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	import { MenuIcon } from 'lucide-svelte';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	/**
	 * @type {HTMLInputElement}
	 */
	let drawerToggle;

	const pages = [
		{ name: 'Consegna 1', routeId: '/consegne/compito1' },
		{ name: 'Consegna 2', routeId: '/consegne/compito2' },
		{ name: 'Consegna 3', routeId: '/consegne/compito3' },
		{ name: 'Consegna 4', routeId: '/consegne/compito4' },
		{ name: 'Consegna 6', routeId: '/consegne/compito6' }
	];
</script>

<!-- drawer container -->
<div class="drawer">
	<input bind:this={drawerToggle} id="app-drawer" type="checkbox" class="drawer-toggle" />

	<!-- page content -->
	<div class="drawer-content min-h-screen flex flex-col">
		<!-- navbar -->
		<nav class="navbar w-full bg-base-200">
			<div class="lg:hidden">
				<label for="app-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<MenuIcon />
				</label>
			</div>
			<a class="btn btn-ghost normal-case text-xl font-bold" href="{base}/">Utenti Scontenti</a>
			<ul class="menu hidden lg:menu-horizontal bg-base-200">
				{#each pages as p}
					<li>
						<a class:active={$page.route.id === p.routeId} href="{base}{p.routeId}">{p.name}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- content container -->
		<div class="flex-grow">
			<slot />
		</div>

		<!-- footer -->
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

	<!-- drawe items -->
	<div class="drawer-side">
		<label for="app-drawer" aria-label="close sidebar" class="drawer-overlay" />
		<ul class="menu p-4 w-80 min-h-full bg-base-200">
			{#each pages as p}
				<li>
					<a
						class:active={$page.route.id === p.routeId}
						href="{base}{p.routeId}"
						on:click={() => (drawerToggle.checked = false)}>{p.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

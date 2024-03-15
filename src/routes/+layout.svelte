<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	import { MenuIcon } from 'lucide-svelte';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import HorizontalNavbarItem from '$lib/HorizontalNavbarItem.svelte';
	import VerticalNavbarItem from '$lib/VerticalNavbarItem.svelte';

	/** @type {boolean} */
	let drawerOpen;

	const navItems = [
		{
			title: 'Consegne',
			children: [
				{ title: 'Consegna 1', routeId: '/consegne/compito1' },
				{ title: 'Consegna 2', routeId: '/consegne/compito2' },
				{ title: 'Consegna 3', routeId: '/consegne/compito3' },
				{ title: 'Consegna 4', routeId: '/consegne/compito4' },
				{ title: 'Consegna 6', routeId: '/consegne/compito6' }
			]
		},
		{ title: 'Presentazione finale', routeId: '/finale' }
	];
</script>

<!-- drawer container -->
<div class="drawer">
	<input bind:checked={drawerOpen} id="app-drawer" type="checkbox" class="drawer-toggle" />

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
				{#each navItems as item}
					<HorizontalNavbarItem {item} />
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

	<!-- drawer items -->
	<div class="drawer-side">
		<label for="app-drawer" aria-label="close sidebar" class="drawer-overlay" />
		<ul class="menu p-4 w-80 min-h-full bg-base-200">
			{#each navItems as item}
				<VerticalNavbarItem {item} on:click={() => (drawerOpen = false)} />
			{/each}
		</ul>
	</div>
</div>

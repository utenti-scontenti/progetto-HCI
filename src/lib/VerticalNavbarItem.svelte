<script>
	/**
	 * @typedef {{ title: string, children: NavItem[] } | { title: string, routeId: string }} NavItem
	 */

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	/** @type {NavItem} */
	export let item;
</script>

<li>
	{#if 'children' in item}
		<h2 class="menu-title">{item.title}</h2>
		<ul class="z-10">
			{#each item.children as child}
				<svelte:self item={child} on:click />
			{/each}
		</ul>
	{:else}
		<a class:active={$page.route.id === item.routeId} href="{base}{item.routeId}" on:click
			>{item.title}</a
		>
	{/if}
</li>

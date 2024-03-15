<script>
	/**
	 * @typedef {{ title: string, children: NavItem[] } | { title: string, routeId: string }} NavItem
	 */

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { clickOutside } from './directives/clickOutside';

	/** @type {NavItem} */
	export let item;

	/** @type {boolean} */
	let open;
</script>

<li>
	{#if 'children' in item}
		<details
			bind:open={open}
			use:clickOutside
			on:outclick
			on:outclick={() => {
				open = false;
				console.log('outclick');
			}}
		>
			<summary>{item.title}</summary>
			<ul class="z-10">
				{#each item.children as child}
					<svelte:self
						item={child}
						on:click
						on:click={() => {
							console.log('click');
							open = false;
						}}
					/>
				{/each}
			</ul>
		</details>
	{:else}
		<a class:active={$page.route.id === item.routeId} href="{base}{item.routeId}" on:click
			>{item.title}</a
		>
	{/if}
</li>

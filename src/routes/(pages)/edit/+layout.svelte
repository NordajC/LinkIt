<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { data, children }: { data: PageData; children: Snippet<[]> } = $props();

	onMount(() => {
		console.log(data);
	});
</script>

<div class="grid grid-rows-[9fr_1fr]">
	{@render children()}
	<nav class="bg-gray-800 p-4">
		<ul class="flex flex-row justify-around">
			{#each data.subroutes as route}
				<li>
					<a
						href={route.path}
						class="text-white hover:text-gray-300 transition-colors duration-200"
					>
						{route.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

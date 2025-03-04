<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	let { data } = $props();
</script>

<main class="flex flex-col items-center gap-6 justify-center">
	{#each data.links as link}
		<Link
			icon={link.icon ?? ''}
			name={link.name}
			description={link.description ?? ''}
			url={link.url}
		/>
	{/each}
</main>

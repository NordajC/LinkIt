<script lang="ts">
	import type { PageData } from './$types';
	import Link from '$lib/components/Link.svelte';

	let { data }: { data: PageData } = $props();
</script>

<main class="">
	{#each data.links as link}
		<Link icon={link.icon ?? ''} name={link.name} description={link.description} />
	{/each}
</main>

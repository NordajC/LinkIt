<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	let { data } = $props();
</script>

{#each data.links as link}
	<Link icon={link.icon ?? ''} name={link.name} description={link.description} />
{/each}

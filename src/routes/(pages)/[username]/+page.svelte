<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	import { User } from 'lucide-svelte';
	let { data } = $props();
	
</script>

<main class="flex flex-col items-center gap-6 justify-center">
	{#if data.isOwner}
		<a class="absolute bottom-4 right-2" href="/edit/links">
			<button class="btn btn-primary rounded-full">
				<User/>
			</button>
		</a>
	{/if}
	{#each data.links as link}
		<Link
			icon={link.icon ?? ''}
			name={link.name}
			description={link.description ?? ''}
			url={link.url}
		/>
	{/each}
</main>

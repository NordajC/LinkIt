<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import type { LayoutData } from './$types';
	import { Settings } from 'lucide-svelte';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="grid grid-rows-[auto_1fr] h-screen">
	<nav
		class="grid grid-cols-[auto_1fr_auto] bg-primary text-primary-foreground p-2 px-10 m-3 rounded-2xl"
	>
		<div class="place-items-center place-self-center">Left</div>
		<div class="place-items-center place-self-center">
			<h1 class="text-4xl">
				LinkIt
			</h1>
		</div>
		<!-- {#if data.user?.aud === 'authenticated'} -->
			<a href="/edit/links" class="place-items-center place-self-center">
				<Settings />
			</a>
		<!-- {/if} -->
	</nav>
	{@render children()}
</div>

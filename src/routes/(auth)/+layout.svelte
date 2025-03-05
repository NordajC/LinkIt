<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>
<main class="flex flex-col items-center justify-center h-screen">
	<div class="w-full grid sm:grid-auto-flow md:grid-cols-2 lg:grid-cols-2 h-svh">
		<div class="lg:bg-[#222] m-4 rounded-lg">
		</div>
		<div class="justify-center items-center place-content-center">
			{@render children()}
		</div>
	</div>
</main>

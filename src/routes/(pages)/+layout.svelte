<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<nav class="grid grid-cols-3 bg-green-200">
	<div class="flex justify-center items-center">Left</div>
	<div class="flex justify-center items-center">
		<h1 class="text-4xl">
			<a href="/"> LinkIt</a>
		</h1>
	</div>
	<div class="flex justify-center items-center">Right</div>
</nav>

<div class="w-full justify-items-center align-middle mt-20">
	{@render children()}
</div>


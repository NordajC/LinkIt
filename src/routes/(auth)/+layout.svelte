<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<main class="flex flex-col items-center justify-center h-screen bg-primary">
	<div class="w-full grid sm:grid-auto-flow md:grid-cols-2 lg:grid-cols-2 h-svh">
		<div class="background m-4 rounded-lg"></div>
		<div class="justify-center items-center place-content-center">
			{@render children()}
		</div>
	</div>
</main>

<style>
	.background {
		background-color: #000000;
		opacity: 0.8;
		background:
			linear-gradient(135deg, #444cf755 25%, transparent 25%) -11px 0/ 22px 22px,
			linear-gradient(225deg, #444cf7 25%, transparent 25%) -11px 0/ 22px 22px,
			linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 22px 22px,
			linear-gradient(45deg, #444cf7 25%, #000000 25%) 0px 0/ 22px 22px;
	}
</style>

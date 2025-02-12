<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>
<nav class="grid grid-cols-3 bg-green-200">
	<div class="flex justify-center items-center">Left</div>
	<div class="flex justify-center items-center">
		<h1 class="text-4xl">LinkIt</h1>
	</div>
	<div class="flex justify-center items-center">Right</div>
</nav>
{@render children()}

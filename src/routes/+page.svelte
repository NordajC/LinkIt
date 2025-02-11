<script lang="ts">
	let { data } = $props();
</script>
<nav>
	<a class="underline" href="/auth/login">Login</a>
	<a class="underline" href="/auth/signup">Sign Up</a>
</nav>
{#each data.instruments as instrument}
	<li>{instrument.name}</li>
{/each}

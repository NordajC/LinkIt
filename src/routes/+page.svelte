<script lang="ts">
	let { data } = $props();
	console.log(data)
</script>

{#each data.links as link}
	<h1>{link}</h1>
{/each}

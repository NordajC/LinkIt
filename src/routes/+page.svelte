<script lang="ts">
	let { data } = $props();
  
</script>

{#each data.instruments as instrument}
      <li>{instrument.name}</li>
    {/each}
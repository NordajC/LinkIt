<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<form method="POST">
	<label>
		Name
		<input name="email" type="email" />
	</label>
	<label>
		URL
		<input name="password" type="password" />
	</label>
	<button class="btn">Add a link</button>
</form>

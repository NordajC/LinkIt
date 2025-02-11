<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    console.log(data)
</script>

<form method="POST" class="flex flex-col items-center bg-slate-500 p-3 rounded-lg gap-4">
	<label>
		Email
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		Password:
		<input type="password" placeholder="Password" name="password" required />
	</label>
	<button class="bg-slate-400 rounded-lg p-2 "> Login </button>
	<p>Dont have an account? <strong><a href="/auth/signup" class="underline">Sign Up</a></strong> </p>
</form>
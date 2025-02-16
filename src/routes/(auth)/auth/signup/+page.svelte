<script lang="ts">
	let { form } = $props();
</script>

<form method="POST" class="flex flex-col items-center bg-slate-500 p-3 rounded-lg gap-4">
	<!-- <label>
		Name:
		<input type="text" placeholder="Name" name="name" required />
	</label> -->
	<label>
		Email:
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		Password:
		<input type="password" placeholder="Password" name="password" required minlength="8" />
	</label><label>
		Username
		<input type="username" placeholder="Username" name="username" required minlength="3" />
	</label>
	<button class="bg-slate-400 rounded-lg p-2"> Sign Up </button>
	<p>Already have an account? <a class="text-blue-700 underline" href="/auth/login">Log In</a></p>
	<p class="text-red-500">{form?.error}</p>
</form>

<script lang="ts">
	let { form } = $props();
</script>

<h2 class="text-center ">Sign Up</h2>
<form
	method="POST"
	class="flex flex-col items-center bg-white-100 p-8 form border-none shadow-none gap-4 form w-xl"
>
	<label class="form-label">
		Username
		<input
			class="form-input"
			type="username"
			placeholder="Username"
			name="username"
			required
			minlength="3"
		/>
	</label>
	<label class="form-label">
		Email
		<input class="form-input" type="email" placeholder="Email" name="email" required />
	</label>
	<label class="form-label">
		Password
		<input
			class="form-input"
			type="password"
			placeholder="Password"
			name="password"
			required
			minlength="8"
		/>
	</label>
	<button class="form-button bg-[#333] text-white rounded-lg p-2"> Sign Up </button>
	<p>Already have an account? <a class="underline" href="/auth/login"><strong>Log In</strong></a></p>
	<p class="text-red-500">{form?.error}</p>
</form>

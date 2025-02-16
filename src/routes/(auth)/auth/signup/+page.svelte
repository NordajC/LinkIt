<script lang="ts">
	let { form } = $props();
</script>

<h1 class="text-center text-2xl">Sign Up</h1>
<form
	method="POST"
	class="flex flex-col items-center bg-white-100 p-8 form border-none shadow-none gap-4 form w-xl"
>
	<!-- <label>
				Name:
				<input type="text" placeholder="Name" name="name" required />
			</label> -->
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
	<p>Already have an account? <a class="text-blue-700 underline" href="/auth/login">Log In</a></p>
	<p class="text-red-500">{form?.error}</p>
</form>

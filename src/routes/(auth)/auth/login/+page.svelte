<script lang="ts">
	let { form } = $props();
</script>

<div class="w-full grid grid-cols-2 h-full m-4">
	<div class="bg-[#222]">
	</div>
	<div class="w-30 bg-red-100">
		<form method="POST" class="flex flex-col items-center bg-white-100 p-8 form rounded-lg gap-4 form w-xl">
			<label class="form-label">Email
				<input class="form-input" type="email" placeholder="Email" name="email" required />
			</label>
			<label class="form-label">
				Password
				<input class="form-input" type="password" placeholder="Password" name="password" required />
			</label>
			<button class="form-button bg-[#333] rounded-lg p-2 text-white"> Login </button>
			<p>Dont have an account? <strong><a href="/auth/signup" class="underline">Sign Up</a></strong> </p>
			<p class="text-red-500">{form?.error}</p>
		</form>
	</div>
	
</div>
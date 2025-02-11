<script lang="ts">
	import { user } from '$lib/user';

	const register = async (e) => {
			e.preventDefault();
			const formData = new FormData(e.target);
			await user.register(formData.get('email'), formData.get('password'), formData.get('name'));
	};
  
</script>

<form class="form" on:submit={register}>
		<input class="form-input" type="text" placeholder="Name" name="name" required />

		<input class="form-input" type="email" placeholder="Email" name="email" required />

		<input class="form-input" type="password" placeholder="Password" name="password" required minlength="8" />

	<button class="btn btn-primary w-full my-1" type="submit"> Register </button>
</form>

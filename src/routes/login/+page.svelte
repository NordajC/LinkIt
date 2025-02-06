<script lang="ts">
	import { user } from '$lib/user';

	const login = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		await user.login(formData.get('email'), formData.get('password'));
	};

	const register = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		await user.register(formData.get('email'), formData.get('password'), formData.get('name'));
	};
</script>

<h1>Login or register</h1>

<form on:submit={login}>
	<label>
		Email
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		Password:
		<input type="password" placeholder="Password" name="password" required />
	</label>
	<button type="submit"> Login </button>
</form>

<form on:submit={register}>
	<label>
		Name:
		<input type="text" placeholder="Name" name="name" required />
	</label>
	<label>
		Email:
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		Password:
		<input type="password" placeholder="Password" name="password" required minlength="8" />
	</label>
	<button type="submit"> Register </button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;

		margin-block-end: 2rem;
	}
</style>

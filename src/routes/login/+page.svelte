<script lang="ts">
	import { user } from '$lib/user';

	const login = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		await user.login(formData.get('email'), formData.get('password'));
	};

</script>

<h1>Login or register</h1>

<form class="form" on:submit={login}>
	<input class="form-input" type="email" placeholder="Email" name="email" required />
	<input class="form-input" type="password" placeholder="Password" name="password" required />
	<button class="btn btn-primary w-full my-1" type="submit"> Login </button>
</form>

<a href="/signup"><button class="btn btn-primary"> Register An Account </button></a>


<!-- <style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;

		margin-block-end: 2rem;
	}
</style> -->

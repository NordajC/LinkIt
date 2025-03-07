<script lang="ts">
	import type { PageData } from './$types';
	import type { PageProps } from '../$types';
	import Link from '$lib/components/Link.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { Plus } from 'lucide-svelte';
	import type { LinkInsert } from '../../../../database.types';

	// let { data }: { data: PageData } = $props();
	let { data, form }: PageProps = $props();
	let showModal = $state(false);

	let showAlertSuccess = $state(true);

	function hideAlertSuccess() {
		showAlertSuccess = false;
	}
	if (form?.success === true) {
		setTimeout(hideAlertSuccess, 3000);
	}

	let showAlertError = $state(true);

	function hideAlertError() {
		showAlertError = false;
	}
	if (form?.success === false) {
		setTimeout(hideAlertError, 3000);
	}

	console.log('form :: ', form);
</script>

<main class="flex flex-col items-center">
	{#each data.links as link}
		<div class="flex flex-row">
			<select name="" id="" class="h-10">
				<option value="" disabled>...</option>
				<option value="Delete"> Delete </option>
				<option value="copy"> Duplicate </option>
			</select>
			<Link icon={link.icon ?? ''} name={link.name} description={link.description} url={link.url} />
			<div class="cursor-move">Grab</div>
		</div>
	{/each}
	<button
		class="btn rounded-full btn-secondary absolute bottom-32 right-4"
		onclick={(event) => {
			event.preventDefault();
			showModal = true;
		}}
	>
		<Plus />
	</button>
	<Modal bind:showModal>
		<form method="POST" class="flex flex-col gap-2 p-4">
			<label class="label">
				<span class="label-text">Name</span>
				<input class="input input-bordered w-full" name="name" placeholder="Enter name" required />
			</label>

			<label class="label">
				<span class="label-text">URL</span>
				<input class="input input-bordered w-full" name="url" placeholder="Enter URL" required />
			</label>

			<label class="label">
				<span class="label-text">Description</span>
				<input
					class="input input-bordered w-full"
					name="description"
					placeholder="Enter description"
					required
				/>
			</label>

			<label class="label">
				<span class="label-text">Icon</span>
				<input
					class="input input-bordered w-full"
					name="icon"
					placeholder="Enter icon URL"
					required
				/>
			</label>
			<button class="btn btn-secondary">Create</button>
		</form>
	</Modal>
	{#if form}
		{#if form?.success}
			<div
				class="alert alert-success fixed bottom-4 right-4 w-auto max-w-md shadow-lg z-50"
				onclick={hideAlertSuccess}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Successfully created link!</span>
			</div>
		{:else if showAlertError}
			<div
				class="alert alert-error fixed bottom-4 right-4 w-auto max-w-md shadow-lg z-50 cursor-pointer"
				onclick={hideAlertError}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>Error creating link. Please try again.</span>
			</div>
		{/if}
	{/if}
</main>

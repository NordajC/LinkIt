<script lang="ts">
	import type { PageProps } from '../$types';
	import Link from '$lib/components/Link.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import {
		Plus,
		X,
		Instagram,
		Twitter,
		Youtube,
		Facebook,
		Twitch,
		Github,
		Linkedin
	} from 'lucide-svelte';
	import Tabs from '$lib/components/Tabs.svelte';

	let { data, form }: PageProps = $props();

	let formData = $state({
		name : "",
		url : "",
		description : "",
		icon : ""
	})

	let showModal = $state(false);
	let showPresetModal = $state(false);

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

	type SocialPreset = {
		id: string;
		name: string;
		icon: typeof Plus;
		baseUrl: string;
		placeholder: string;
	};

	const socialPresets: SocialPreset[] = [
		{
			id: 'instagram',
			name: 'Instagram',
			icon: Instagram,
			baseUrl: 'https://instagram.com/',
			placeholder: 'username'
		},
		{
			id: 'twitter',
			name: 'Twitter',
			icon: Twitter,
			baseUrl: 'https://twitter.com/',
			placeholder: 'username'
		},
		{
			id: 'youtube',
			name: 'YouTube',
			icon: Youtube,
			baseUrl: 'https://youtube.com/c/',
			placeholder: 'channel'
		},
		{
			id: 'facebook',
			name: 'Facebook',
			icon: Facebook,
			baseUrl: 'https://facebook.com/',
			placeholder: 'username'
		},
		{
			id: 'twitch',
			name: 'Twitch',
			icon: Twitch,
			baseUrl: 'https://twitch.tv/',
			placeholder: 'username'
		},
		{
			id: 'github',
			name: 'GitHub',
			icon: Github,
			baseUrl: 'https://github.com/',
			placeholder: 'username'
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			icon: Linkedin,
			baseUrl: 'https://linkedin.com/in/',
			placeholder: 'username'
		}
	];

	function selectPreset(preset : SocialPreset) {
		formData.name = preset.name;
		formData.url = preset.baseUrl;
		formData.description = `My ${preset.name} profile`;
		formData.icon = preset.id;
	}

	let tabItems = [
		{
			label : 'Tab 1',
			value : 1,
		},
		{
			label : 'Tab 2',
			value : 2,
		}
	]
</script>

{#snippet socialPresetButton(preset : SocialPreset)}
	<button class="btn btn-secondary" onclick="{() => selectPreset(preset)}">
		<svelte:component this={preset.icon} />
		<p>{preset.name}</p>
	</button>
{/snippet}

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
	<Tabs items={tabItems}>
		<h1>Hefllo</h1>
	</Tabs>
	<!-- Create Link Modal -->
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

	<!-- Preset Modal -->
	<div class="flex flex-col w-96">
		<div class="flex flex-row justify-evenly gap-2 flex-wrap" id="preset-buttons">
			{#each socialPresets as preset}
				{@render socialPresetButton(preset)}
			{/each}
		</div>
		<form method="POST" class="flex flex-col gap-2 p-4">
			<label class="label">
				<span class="label-text">Name</span>
				<input class="input input-bordered w-full" name="name" placeholder="Enter name" required
				bind:value={formData.name} />
			</label>
			<label class="label">
				<span class="label-text">URL</span>
				<input class="input input-bordered w-full" name="url" placeholder="Enter URL" required
				bind:value={formData.url} />
			</label>
			<label class="label">
				<span class="label-text">Description</span>
				<input
					class="input input-bordered w-full"
					name="description"
					placeholder="Enter description"
					required
					bind:value={formData.description}
				/>
			</label>
			<label class="label">
				<span class="label-text">Icon</span>
				<input
					class="input input-bordered w-full"
					name="icon"
					placeholder="Enter icon URL"
					required
					bind:value={formData.icon}
				/>
			</label>
			<button class="btn btn-secondary">Create</button>
		</form>
	</div>

	{#if form}
		{#if form?.success}
			<button
				class="alert alert-success fixed bottom-4 right-4 w-auto max-w-md shadow-lg z-50"
				onclick={hideAlertSuccess}
			>
				<X />
				<span>Successfully created link!</span>
			</button>
		{:else if showAlertError}
			<button
				class="alert alert-error fixed bottom-4 right-4 w-auto max-w-md shadow-lg z-50 cursor-pointer"
				onclick={hideAlertError}
			>
				<X />
				<span>Error creating link. Please try again.</span>
			</button>
		{/if}
	{/if}
</main>

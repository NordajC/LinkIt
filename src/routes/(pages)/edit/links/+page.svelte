<script lang="ts">
	import type { PageProps } from '../$types';
	import Link from '$lib/components/Link.svelte';
	import { Tabs, Dialog } from 'bits-ui';
	import {
		Plus,
		X,
		Instagram,
		Twitter,
		Youtube,
		Facebook,
		Twitch,
		Github,
		Linkedin,
		InstagramIcon,
		TwitterIcon
	} from 'lucide-svelte';
	let { data, form }: PageProps = $props();

	let formData = $state({
		name: '',
		url: '',
		description: '',
		icon: ''
	});

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

	function selectPreset(preset: SocialPreset) {
		formData.name = preset.name;
		formData.url = preset.baseUrl;
		formData.description = `My ${preset.name} profile`;
		formData.icon = preset.id;
	}
</script>

{#snippet socialPresetButton(preset: SocialPreset)}
	<button class="btn btn-secondary" onclick={() => selectPreset(preset)}>
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

	<Dialog.Root>
		<Dialog.Trigger
			class="rounded-input bg-dark text-black
			shadow-mini hover:bg-dark/95 focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden
			inline-flex h-12 items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
		>
			Create Link
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay
				class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
			/>
			<Dialog.Content
				class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full"
			>
				<Dialog.Title
					class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
				>
					Create Link
				</Dialog.Title>
				<!-- <Separator.Root class="bg-muted -mx-5 mb-6 mt-5 block h-px" /> -->

				<Tabs.Root
					value="custom"
					class="rounded-card border-muted bg-background-alt shadow-card w-[390px] border p-3"
				>
					<Tabs.List
						class="rounded-9px bg-dark-10 shadow-mini-inset dark:bg-background grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30"
					>
						<Tabs.Trigger
							value="custom"
							class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
							>Custom</Tabs.Trigger
						>
						<Tabs.Trigger
							value="preset"
							class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
							>Preset</Tabs.Trigger
						>
					</Tabs.List>

					<Tabs.Content value="custom" class="select-none pt-3">
						<form method="POST" class="flex flex-col gap-2 p-4">
							<label class="label">
								<span class="label-text">Name</span>
								<input
									class="input input-bordered w-full"
									name="name"
									placeholder="Enter name"
									required
								/>
							</label>

							<label class="label">
								<span class="label-text">URL</span>
								<input
									class="input input-bordered w-full"
									name="url"
									placeholder="Enter URL"
									required
								/>
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
					</Tabs.Content>

					<Tabs.Content value="preset" class="select-none pt-3">
						<div class="flex flex-col w-96">
							<div class="flex flex-row justify-evenly gap-2 flex-wrap" id="preset-buttons">
								{#each socialPresets as preset}
									{@render socialPresetButton(preset)}
								{/each}
							</div>
							<form method="POST" class="flex flex-col gap-2 p-4">
								<label class="label">
									<span class="label-text">Name</span>
									<input
										class="input input-bordered w-full"
										name="name"
										placeholder="Enter name"
										required
										bind:value={formData.name}
									/>
								</label>
								<label class="label">
									<span class="label-text">URL</span>
									<input
										class="input input-bordered w-full"
										name="url"
										placeholder="Enter URL"
										required
										bind:value={formData.url}
									/>
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
					</Tabs.Content>
				</Tabs.Root>

				<div class="flex w-full justify-end">
					<Dialog.Close
						class="h-input rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 focus-visible:ring-dark focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex items-center justify-center px-[50px] text-[15px] font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
					>
						Save
					</Dialog.Close>
				</div>
				<Dialog.Close
					class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden absolute right-5 top-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
				>
					<div>
						<X class="text-foreground size-5" />
						<span class="sr-only">Close</span>
					</div>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>

	<!-- Preset Modal -->

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

<script lang="ts">
	import {
		Facebook,
		Github,
		Instagram,
		Linkedin,
		TreePalm,
		Twitch,
		Twitter,
		Youtube,
		Link
	} from 'lucide-svelte';
	// import Link from './Link.svelte';

	type FormDataType = {
		name: string;
		url: string;
		username: string;
		description: string;
		icon: typeof TreePalm;
	};
	let formData: FormDataType = $state({
		name: '',
		url: '',
		username: '',
		description: '',
		icon: TreePalm
	});

	type socialLinkType = {
		icon: typeof TreePalm;
		display: string;
		url: string;
		username: string;
		description: string;
	};

	const socialLinks: socialLinkType[] = [
		{
			icon: Instagram,
			display: 'Instagram',
			url: 'https://www.instagram.com/',
			username: 'LinkIt',
			description: 'Follow me on Instagram'
		},
		{
			icon: Twitter,
			display: 'Twitter',
			url: 'https://www.twitter.com/',
			username: 'LinkIt',
			description: 'Follow me on Twitter'
		},
		{
			icon: Youtube,
			display: 'YouTube',
			url: 'https://www.youtube.com/',
			username: 'LinkIt',
			description: 'Subscribe to my channel'
		},
		{
			icon: Facebook,
			display: 'Facebook',
			url: 'https://www.facebook.com/',
			username: 'LinkIt',
			description: 'Connect on Facebook'
		},
		{
			icon: Twitch,
			display: 'Twitch',
			url: 'https://www.twitch.tv/',
			username: 'LinkIt',
			description: 'Watch my streams'
		},
		{
			icon: Github,
			display: 'GitHub',
			url: 'https://www.github.com/',
			username: 'LinkIt',
			description: 'Check out my projects'
		},
		{
			icon: Linkedin,
			display: 'LinkedIn',
			url: 'https://www.linkedin.com/in/',
			username: 'LinkIt',
			description: 'Connect professionally'
		},
		{ icon: TreePalm, display: 'Custom', url: '', username: '', description: 'Custom link' }
	];

	function selectLink(link: socialLinkType) {
		formData.name = link.display;
		formData.url = link.url;
		formData.description = link.description;
		formData.icon = link.icon;
	}
</script>

<div class="rounded-lg border bg-background p-4 shadow-lg">
	<div class="flex flex-col space-y-4">
		<div class="flex items-center justify-between">
			<h3 class="font-semibold ml-3">Add New Link</h3>
			<button class="btn"> Close </button>
		</div>

		<div class="grid grid-cols-4 gap-2">
			{#each socialLinks as link, i}
				<button
					class="btn flex flex-col items-center justify-center h-20 p-2"
					onclick={() => selectLink(link)}
				>
					<svelte:component this={link.icon} class="h-5 w-5" />
					<span class="mt-1 text-xs">
						{link.display}
					</span>
				</button>
			{/each}
		</div>

		<div class="space-y-2">
			<label class="text-sm font-medium">Display Name</label>
			<input class="input" placeholder="My Instagram" bind:value={formData.name} />
		</div>

		<div class="space-y-2">
			<label class="text-sm font-medium">Username/Handle</label>
			<div class="flex">
				<div
					class="bg-muted flex items-center px-3 rounded-l-md border border-r-0 border-input text-sm text-muted-foreground"
				>
					{formData.url}
				</div>
				<input class="input rounded-l-none" placeholder="username" bind:value={formData.username} />
			</div>
		</div>

		<div class="space-y-2">
			<label class="text-sm font-medium">Description (Optional)</label>
			<input class="input" placeholder="Follow me on Instagram" bind:value={formData.description} />
		</div>

		<div class="flex justify-end space-x-2">
			<button class="btn">Cancel</button>
			<button class="btn btn-primary"><a href="/auth/signup">Add Link</a></button>
		</div>
		<div class="flex flex-col items-center w-full group">
			<a
				href="{formData.url}{formData.username}"
				target="_blank"
				class="grid grid-cols-[auto_1fr_auto] px-6 bg-secondary
                transition-all duration-200 ease-in-out transform hover:scale-[1.02]
                border border-transparent hover:border-primary/20 p-3 rounded-2xl w-full h-20
                shadow-sm hover:shadow-md"
			>
				<svelte:component this={formData.icon} size={24} class="place-self-center" />
				<h3 class="place-items-center place-self-center font-medium text-lg">{formData.name}</h3>
				<button
					class="place-items-center place-self-center opacity-60 hover:opacity-100 transition-opacity"
				>
					<Link size={24} />
				</button>
			</a>
			<p
				class="mt-3 px-4 text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-200 text-muted-foreground text-center"
			>
				{formData.description}
			</p>
		</div>
	</div>
</div>

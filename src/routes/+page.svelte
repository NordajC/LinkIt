<script lang="ts">
	import LinkForm from '$lib/components/LinkForm.svelte';
	import { Accordion } from 'bits-ui';
	import {
		ArrowRight,
		CheckCircle2,
		Facebook,
		Github,
		Instagram,
		Linkedin,
		Twitch,
		Twitter,
		Youtube,
		TreePalm,
		ChevronDown
	} from 'lucide-svelte';

	let { data } = $props();

	interface Card {
		title: string;
		description: string;
		icon: any;
	}

	const cards: Card[] = [
		{
			title: 'Social Media Presets',
			description: 'Quickly add links to your social profiles with our pre-configured templates.',
			icon: TreePalm
		},
		{
			title: 'Custom Branding',
			description:
				'Personalize your page with custom colors, fonts, and images to match your brand.',
			icon: CheckCircle2
		},
		{
			title: 'Analytics Dashboard',
			description: 'Track clicks, views, and engagement to optimize your link performance.',
			icon: CheckCircle2
		}
	];
</script>

{#snippet CardList(cards: Card[])}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
		{#each cards as card}
			<div class="card p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="flex flex-col items-center text-center space-y-2">
					<svelte:component this={card.icon} class="w-10 h-10 text-primary" />
					<h3 class="text-xl font-bold">{card.title}</h3>
					<p class="text-muted-foreground">{card.description}</p>
				</div>
			</div>
		{/each}
	</div>
{/snippet}

<div class="flex min-h-screen flex-col">
	<header
		class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-16 items-center justify-between">
			<div class="flex items-center gap-2 font-bold text-xl">
				<div class="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
					<TreePalm class="h-4 w-4 text-primary-foreground" />
				</div>
				<span>LinkIt</span>
			</div>

			<nav class="hidden md:flex gap-6">
				<a href="#features" class="text-muted-foreground hover:text-foreground transition-colors">
					Features
				</a>
				<a href="#pricing" class="text-muted-foreground hover:text-foreground transition-colors">
					Pricing
				</a>
				<a href="#faq" class="text-muted-foreground hover:text-foreground transition-colors">
					FAQ
				</a>
			</nav>

			<div class="flex items-center gap-4">
				<button class="btn">
					<a
						href="/auth/login"
						class="hidden md:block text-muted-foreground hover:text-foreground transition-colors"
					>
						Log in
					</a>
				</button>
				<button class="btn btn-primary">
					<a href="/auth/signup">Get Started</a>
				</button>
			</div>
		</div>
	</header>

	<main class="flex-1">
		<section class="py-20 md:py-28">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<h1
								class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
							>
								One link for all your online content
							</h1>
							<p class="max-w-[600px] text-muted-foreground md:text-xl">
								Share everything you create, curate and sell online with just one link. Connect your
								audience to all your content.
							</p>
						</div>
						<div class="flex flex-col gap-2 min-[400px]:flex-row">
							<button class="btn btn-primary font-bold flex flex-row">
								<a href="/auth/signup"> Get your LinkIt </a>
								<ArrowRight class="ml-2" size={20} />
							</button>
							<button class="btn font-bold">
								<a href="#demo">See how it works</a>
							</button>
						</div>
					</div>
					<div class="flex items-center justify-center">
						<div
							class="relative h-[500px] w-[250px] overflow-hidden rounded-xl border bg-background shadow-xl"
						>
							<div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-background p-4">
								<div class="flex flex-col items-center">
									<div class="h-16 w-16 rounded-full bg-background p-1">
										<div class="h-full w-full rounded-full bg-primary/20"></div>
									</div>
									<h3 class="mt-2 text-lg font-semibold">@username</h3>
									<p class="text-sm text-muted-foreground">Your bio goes here</p>
									<div class="mt-6 space-y-2 w-full">
										{#each [{ icon: Instagram, name: 'Instagram' }, { icon: Twitter, name: 'Twitter' }, { icon: Youtube, name: 'YouTube Channel' }, { icon: Github, name: 'GitHub' }, { icon: Linkedin, name: 'LinkedIn' }] as { icon: Icon, name }}
											<div
												class="flex items-center gap-2 rounded-md bg-card p-3 shadow-sm hover:shadow transition-all cursor-pointer"
											>
												<svelte:component this={Icon} class="h-4 w-4" />
												<span class="text-sm font-semibold">{name}</span>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="features" class="bg-muted/40 py-20">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div
							class="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
						>
							Features
						</div>
						<h2 class="font-bold tracking-tighter">Everything you need in one place</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Our platform provides all the tools you need to create a powerful online presence with
							just one link.
						</p>
					</div>
				</div>

				{@render CardList(cards)}
			</div>
		</section>

		<section id="demo" class="py-20">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							See how it works
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Creating your LinkIt page is simple and intuitive. Add links in seconds with our
							easy-to-use interface.
						</p>
					</div>
				</div>

				<div class="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<h3 class="text-2xl font-bold">Easy link management</h3>
							<p class="text-muted-foreground">
								Add, edit, and organize your links with our intuitive dashboard. Choose from popular
								social media presets or create custom links.
							</p>
						</div>

						<div class="space-y-4">
							{#each ['Select from popular social media presets', 'Customize link appearance and behavior', 'Drag and drop to reorder your links', 'Track performance with built-in analytics'] as item}
								<div class="flex items-start gap-2">
									<CheckCircle2 class="h-5 w-5 text-primary mt-0.5" />
									<span>{item}</span>
								</div>
							{/each}
						</div>

						<button class="btn w-fit">
							<a href="/auth/signup">Try it yourself</a>
						</button>
					</div>

					<LinkForm/>
				</div>
			</div>
		</section>

		<section id="pricing" class="bg-muted/40 py-20">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div
							class="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
						>
							Pricing
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Simple, transparent pricing
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Choose the plan that's right for you and start building your online presence today.
						</p>
					</div>
				</div>

				<div class="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each [{ title: 'Free', price: '$0', description: 'Perfect for getting started', features: ['Up to 5 links', 'Basic analytics', 'Standard themes', 'Mobile-optimized page', 'LinkIt subdomain'], cta: 'Get Started', popular: false }, { title: 'Pro', price: '$8', period: '/month', description: 'Everything you need for personal branding', features: ['Unlimited links', 'Advanced analytics', 'Premium themes', 'Remove LinkIt branding', 'Custom domain', 'Priority support'], cta: 'Get Pro', popular: true }, { title: 'Business', price: '$19', period: '/month', description: 'For teams and businesses', features: ['Everything in Pro', 'Team collaboration', 'Multiple pages', 'API access', 'Advanced integrations', 'Dedicated support'], cta: 'Contact Sales', popular: false }] as plan, i}
						<div
							class="card relative overflow-hidden {plan.popular ? 'border-primary shadow-md' : ''}"
						>
							{#if plan.popular}
								<div
									class="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
								>
									Most Popular
								</div>
							{/if}
							<div class="p-6">
								<div class="flex flex-col space-y-2"></div>
								<h3 class="text-2xl font-bold">{plan.title}</h3>
								<div class="flex items-baseline">
									<span class="text-3xl font-bold">{plan.price}</span>
									{#if plan.period}<span class="text-muted-foreground">{plan.period}</span>{/if}
								</div>
								<p class="text-sm text-muted-foreground">{plan.description}</p>
							</div>
							<div class="mt-6 space-y-4">
								{#each plan.features as feature}
									<div class="flex items-start gap-2">
										<CheckCircle2 class="h-5 w-5 text-primary mt-0.5" />
										<span>{feature}</span>
									</div>
								{/each}
							</div>
							<button class="mt-6 w-full {plan.popular ? 'btn btn-primary' : 'btn'}">
								{plan.cta}
							</button>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section id="faq" class="py-20">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Frequently asked questions
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Find answers to common questions about our platform.
						</p>
					</div>
				</div>

				<div class="mx-auto mt-12 max-w-3xl space-y-4 flex justify-center">
					<Accordion.Root type="multiple" class="w-full sm:max-w-[70%]" collapsible>
						{#each [{ question: 'What is LinkIt?', answer: "LinkIt is a platform that allows you to create a personalized page with links to all your online content, social media profiles, websites, and more. It's like a digital business card that you can share with a single link." }, { question: 'How do I create a LinkIt page?', answer: 'Simply sign up for an account, choose a username, and start adding links to your page. You can customize the appearance, add a profile picture, and organize your links however you like.' }, { question: 'Can I use my own domain name?', answer: 'Yes! Pro and Business plan users can connect their own custom domain to their LinkIt page for a more professional and branded experience.' }, { question: 'How do social media presets work?', answer: "Our social media presets make it easy to add links to popular platforms. Simply select the platform you want to add, enter your username or handle, and we'll automatically format the link correctly with the appropriate icon." }, { question: 'Can I track how many people click my links?', answer: 'Yes, all plans include analytics that show you how many people visit your page and click on your links. Pro and Business plans include more detailed analytics.' }, { question: 'Is there a limit to how many links I can add?', answer: 'Free accounts can add up to 5 links. Pro and Business accounts can add unlimited links.' }] as item, i}
							<Accordion.Item value="item-{i}" class="border-dark-10 group border-b px-1.5">
								<Accordion.Header>
									<Accordion.Trigger
										class="flex w-full flex-1 select-none items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
									>
										<span class="w-full text-left font-semibold">
											{item.question}
										</span>
										<span
											class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
										>
											<ChevronDown class="transition-transform duration-200" />
										</span>
									</Accordion.Trigger>
								</Accordion.Header>
								<Accordion.Content
									class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
									><div class="pb-7">{item.answer}</div></Accordion.Content
								>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
				</div>
			</div>
		</section>

		<section class="bg-primary text-primary-foreground py-20">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Ready to simplify your online presence?
						</h2>
						<p class="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Join thousands of creators, influencers, and businesses who use LinkIt to connect with
							their audience.
						</p>
					</div>
					<div class="flex flex-col gap-2 min-[400px]:flex-row">
						<button class="btn btn-accent font-bold flex flex-row">
							<a href="/auth/signup"> Get your LinkIt </a>
							<ArrowRight class="ml-2" size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="border-t bg-muted/40">
		<div class="container px-4 py-12 md:px-6">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
				<div class="col-span-2 lg:col-span-2">
					<div class="flex items-center gap-2 font-bold text-xl">
						<div class="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
							<TreePalm class="h-4 w-4 text-primary-foreground" />
						</div>
						<span>LinkIt</span>
					</div>
					<p class="mt-2 text-sm text-muted-foreground">
						Connect your audience to everything you create, curate and sell online with just one
						link.
					</p>
				</div>
				<div>
					<h3 class="text-sm font-medium">Product</h3>
					<ul class="mt-2 space-y-2 text-sm">
						<li>
							<a
								href="#features"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#pricing"
								class="text-muted-foreground hover:text-foreground transition-colors"
							>
								Pricing
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Testimonials
							</a>
						</li>
						<li>
							<a href="#faq" class="text-muted-foreground hover:text-foreground transition-colors">
								FAQ
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-sm font-medium">Company</h3>
					<ul class="mt-2 space-y-2 text-sm">
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								About
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Blog
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-sm font-medium">Legal</h3>
					<ul class="mt-2 space-y-2 text-sm">
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Terms
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Privacy
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Cookies
							</a>
						</li>
						<li>
							<a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
								Licenses
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="mt-12 border-t pt-6">
				<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p class="text-sm text-muted-foreground">© 2023 LinkIt. All rights reserved.</p>
					<div class="flex gap-4">
						<a href="/" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors">
							<Instagram class="h-5 w-5" />
							<span class="sr-only">Instagram</span>
						</a>
						<a href="/" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors">
							<Github class="h-5 w-5" />
							<span class="sr-only">GitHub</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

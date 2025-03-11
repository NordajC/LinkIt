<script lang="ts">
	import type { Link } from '../../app';
	import { Link as LinkIcon } from 'lucide-svelte'
	let link: Link = $props();
</script>

<div class="flex flex-col items-center w-full group">
	<a 
		href="{link.url}" 
		target="_blank" 
		class="grid grid-cols-[auto_1fr_auto] px-6 bg-secondary 
		transition-all duration-200 ease-in-out transform hover:scale-[1.02] 
		border border-transparent hover:border-primary/20 p-3 rounded-2xl w-full h-20 
		shadow-sm hover:shadow-md"
	>
		<img 
			class="place-items-center place-self-center w-14 h-14 rounded-xl object-cover" 
			src="{link.icon}" 
			alt="{link.name} icon"
		/>
		<!-- <svelte:component this={link.icon}/> -->
		<h3 class="place-items-center place-self-center font-medium text-lg">{link.name}</h3>
		<button class="place-items-center place-self-center opacity-60 hover:opacity-100 transition-opacity">
			<LinkIcon size={24}/>
		</button>
	</a>
	<p class="mt-3 px-4 text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-200 text-muted-foreground text-center">
		{link.description}
	</p>
</div>
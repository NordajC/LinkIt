<script lang="ts">
	import type { Link } from '../../app';
	import { Link as LinkIcon } from 'lucide-svelte'
	let link: Link = $props();
</script>

<div class="flex flex-col items-center w-[16rem] sm:w-[30rem] md:w-[48rem] group">
	<a href="{link.url}" target="_blank" class="grid grid-cols-[auto_1fr_auto] px-5 bg-secondary hover:bg-secondary-foreground hover:border p-2 rounded-full w-full h-24">
		<img class="place-items-center place-self-center w-16 rounded-full" src="{link.icon}" alt="link icon"/>
		<h3 class="place-items-center place-self-center">{link.name}</h3>
		<button class="place-items-center place-self-center">
			<LinkIcon size={28}/>
		</button>
	</a>
	<p class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-gray-600">{link.description}</p>
</div>
<script lang="ts">
	import type { Link } from '../../app';
	import { Link as LinkIcon } from 'lucide-svelte'
	let link: Link = $props();
</script>

<div class="flex flex-col sm:w-96 items-center">
	<div class="flex justify-between gap-4 items-center bg-blue-500 p-2 rounded-full w-full">
		<img src={link.icon} alt="link icon" />
		<p>{link.name}</p>
		<button>
            <LinkIcon size={20}/>
        </button>
	</div>
	<div class="">{link.description}</div>
</div>

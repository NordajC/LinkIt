import type { Session, SupabaseClient, User } from '@supabase/supabase-js'
import { TreePalm } from 'lucide-svelte';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
			session: Session | null
			user: User | null
		}
		interface PageData {
			session: Session | null
		}
		// interface PageState {}
		// interface Platform {}
	}
}


export type Link = {
	name : string,
	url: string;
	// icon : string ,
	icon: any;
	description: string;
}
const INSTAGRAM_LINK: Link = {
	url: "https://instagram.com/awaisa4",
	icon: "instagram_logo.webp",
	description: "This is my Instagram"
}

type User = {
	id: number;
	username: string;
	created_at: Date;
	updated_at: Date;
	links: Link[];
	avatar: string;
	theme: Theme;
}
type Theme = 'Nord' | 'Dracula' | 'Valentine' | 'Default';


export {
	User
};

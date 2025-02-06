// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

type Link = {
	url: string;
	icon: string;
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


export {};

import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const { data, error } = await locals.supabase.auth.getUser();

    if (error || !data.user) {
        throw redirect(303, "/"); // Redirect unauthenticated users to home
    }
    return {
        subroutes: [
            { name: "Analytics", path: "/edit/analytics" },
            { name: "Design", path: "/edit/design" },
            { name: "Links", path: "/edit/links" },
            { name: "Settings", path: "/edit/settings" }
        ],

        user: data.user
    };
}) satisfies LayoutServerLoad;
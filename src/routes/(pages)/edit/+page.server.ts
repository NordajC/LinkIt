import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const load = (async () => {

    redirect(308, "/edit/links/")

    return {};
}) satisfies PageServerLoad;
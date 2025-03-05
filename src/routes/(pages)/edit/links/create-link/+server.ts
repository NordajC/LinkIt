import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Database } from '../../../../../database.types';

export const POST: RequestHandler = async ({ request, locals }) => {
    const user = locals.user;
    if (!user) {
        return json({ error: "Unauthorized" }, { status: 401 });
    }

    // const { name, url, description, icon } = await request.json()
    const data = await request.json();
    console.log(data)
    // if (!name || !url || !description || !icon) {
    //     return json({ error: "Missing fields" }, { status: 400 });
    // }

    // const { data, error } = await locals.supabase.from('links')
    //     .insert([{ name, url, description, icon }])


    return new Response();
};
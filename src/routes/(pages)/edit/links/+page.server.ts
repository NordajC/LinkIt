import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, user } }) => {
    
    const { data: userLinks, error: error } = await supabase.from('links').select().eq('username', user?.user_metadata.username)

    if(error) {
        console.log(error)
        return error
    } else {

    }

    return {
        links : userLinks
    };
}) satisfies PageServerLoad;
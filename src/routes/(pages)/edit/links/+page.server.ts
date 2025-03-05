import type { PageServerLoad } from './$types';
import type { LinkRow } from '../../../../database.types';
import type { Actions } from '../$types';
export const load = (async ({ locals: { supabase, user } }) => {

    const { data, error: error } = await supabase.from('links').select().eq('username', user?.user_metadata.username)

    if (!error) {
        const links = data as LinkRow[]
        return {
            links
        };
    } else {
        console.log(error)
    }

}) satisfies PageServerLoad;

export const actions = {
    default : async ({request, locals: {supabase}}) => {
        const data = await request.formData();
        const { data : userData, error : userError } = await supabase.auth.getUser();
        const name = data.get("name")
        const url = data.get("url")
        const description = data.get("description")
        const icon = data.get("icon")
        const username = userData.user?.user_metadata.username

        const { error } = await supabase.from('links').insert([{name, url, description, icon, username}])

        console.log("SUPABASE EROR: ", error)
    }
} satisfies Actions
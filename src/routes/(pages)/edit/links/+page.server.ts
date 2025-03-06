import type { PageServerLoad } from './$types';
import type { LinkRow } from '../../../../database.types';
import type { Actions } from '../$types';
import { LinkSchema } from '../../../../zod.types';
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
    default: async ({ request, locals: { supabase } }) => {
        try {
            const formData = await request.formData();
            const { data: userData, error: userError } = await supabase.auth.getUser();
            
            if (userError) throw new Error('Authentication failed');

            const linkData = {
                name: formData.get("name"),
                created_at: formData.get("created_at"),
                url: formData.get("url"),
                description: formData.get("description"),
                icon: formData.get("icon"),
                username: userData.user?.user_metadata.username
            };

            const validatedData = LinkSchema.parse(linkData);
            const { error } = await supabase.from('links').insert([validatedData]);

            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('Error inserting link:', error);
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }
} satisfies Actions;
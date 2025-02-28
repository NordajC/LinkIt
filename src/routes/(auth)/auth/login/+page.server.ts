import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '../../../$types';
export const actions = {
    default: async ({ request, locals: { supabase, user } }) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            // console.error(error)
            return fail(422, {
                error: error.message
            });
        } else {
            const { data: userData, error: userError } = await supabase
                .from('users')
                .select('username')
                .eq('email', email)
                .single();

            if (userError) {
                // console.error("usererror: ", userError);
                return fail(422, {
                    error: userError.message
                });
            }
            // console.log("userdata: ", userData)
            throw redirect(303, `/${userData.username}`);
        }
    },
} satisfies Actions;
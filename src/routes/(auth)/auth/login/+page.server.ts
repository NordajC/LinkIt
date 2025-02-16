import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '../../../$types';
export const actions = {
    default: async ({ request, locals: { supabase, user } }) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            console.error(error)
            return fail(422, {
                error: error.message
            });
        } else {
            //? May show an error that it doesnt exist but it does 
            redirect(303, `/${user?.user_metadata.username}`)
        }
    },
} satisfies Actions;
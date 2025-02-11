import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '../../../$types';
export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        // const name = formData.get('name') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            console.error(error)
            return fail(422, {
                error: error.message
            });
        } else {
            redirect(303, '/')
        }
    },
} satisfies Actions;
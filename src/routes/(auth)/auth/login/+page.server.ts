import { redirect } from '@sveltejs/kit';
import type { Actions } from '../../../$types';
export const actions = {
    default:async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            console.error(error)
        } else {
            redirect(303, '/private')
        }
    },
} satisfies Actions;
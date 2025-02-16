import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '../../../$types';

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const username = formData.get('username') as string;

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            }
        });

        if (error) {
            console.error(error);
            return fail(422, {
                error: error.message
            });
        } else {
            redirect(303, `/${username}`);
        }
    },
} satisfies Actions;
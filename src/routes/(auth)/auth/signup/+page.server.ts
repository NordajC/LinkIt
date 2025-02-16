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
            console.error("Error signing up: ", error);
            return fail(422, {
                error: error.message
            });
        }

        // Log in the user immediately
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (loginError) {
            console.error("Error logging in after sign-up: ", loginError);
            return fail(422, { error: "User must verify email before logging in." });
        }

        // Fetch authenticated user
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData.user) {
            console.error("Error fetching user: ", userError);
            return fail(422, { error: "Failed to retrieve user after sign-up." });
        }

        const { data, error: insertError } = await supabase
            .from('users')
            .insert([{ username, email }]);

        if (insertError) {
            console.error("Insert Error: ", insertError);
            return fail(422, {
                error: insertError.message
            });
        }

        redirect(303, `/${username}`);

    },
} satisfies Actions;
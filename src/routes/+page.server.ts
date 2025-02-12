import { z } from 'zod';

const UserInfo = z.object({
    id: z.string().uuid(), //! This might be wrong
    theme: z.enum(['Default, Mocha, Nord, Gruvbox'])
})

export async function load({ locals: { supabase } }) {
    async function getUserInfo() {
        const { data } = await supabase.from('users_information').select();
        return data
    }
    const { data } = await supabase.from('links').select();
    console.log(data)
    return {
        links: data ?? [],
        userInfo : getUserInfo()
    };
}
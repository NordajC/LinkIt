// import { supabase } from '$lib/supabase';

export async function load({ locals: { supabase } }) {
    const { data } = await supabase.from('instruments').select();
    return {
        instruments: data ?? []
    };
}
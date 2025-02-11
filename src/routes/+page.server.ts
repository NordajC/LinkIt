import { supabase } from '$lib/supabase';

export async function load() {
    const { data } = await supabase.from('instruments').select();
    return {
        instruments: data ?? []
    };
}
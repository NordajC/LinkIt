import type { PageServerLoad, Actions } from './$types';

// get the cookie
// based on the username and id make a get reuest for the data
export const load = (async ({cookies, request}) => {

    // Get the current links

    return {};
}) satisfies PageServerLoad;


export const actions = {
	default: async ({ request}) => {
		// TODO log the user in
        const data = await request.formData();
        const url = data.get("url")
	}
} satisfies Actions;
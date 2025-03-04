import { z } from 'zod';
// Define Zod schemas
const UserInfoSchema = z.object({
    id: z.string().uuid(),
    theme: z.enum(['Default', 'Mocha', 'Nord', 'Gruvbox']), // Fixed enum values
});

const LinkSchema = z.object({
    id: z.number(),
    user_id: z.string().uuid(),
    created_at: z.string(), //TODO the supabase datetime sent isnt the same as `.datetime()` that zod uses. needs checking
    url: z.string().url(),
    name: z.string(),
    description: z.string().nullable(),
    icon: z.string().nullable(),
});

const LinkArraySchema = z.array(LinkSchema);

export async function load({ locals: { supabase }, params }) {

    async function isAuthenticated() {
        const { data, error } = await supabase.auth.getUser();
        if (!error) {
            if (data.user !== null) {
                return {
                    isAuthenticated: true
                };
            }
            else {
                return {
                    isAuthenticated: false
                }
            }
        } else {
            console.log("Error getting user : ", error)
            return {
                isAuthenticated: false
            }
        }
    }

    // Fetch and validate user info
    async function getUserInfo() {
        // const { data, error } = await supabase.from('users_information').select('*');

        // if (error) {
        //     console.error('Database error (user info):', error.message);
        //     return null;
        // }

        // try {
        //     const validatedData = UserInfoSchema.parse(data[0]); // Validate the first row
        //     console.log('Validated user info:', validatedData);
        //     return validatedData;
        // } catch (validationError) {
        //     console.error('Validation error (user info):', validationError.errors);
        //     return null;
        // }
    }

    // Fetch and validate user links
    async function getUserLinks() {
        /** ?
         * We have two options for getting the links
         * either use the username meaning we have to store the username in the links table instead of the user id
         * or we can get the user id from the auth table based on the username then query for the links but this requires two calls to the db
         */
        const { data, error } = await supabase
            .from('links')
            .select('*')
            .eq('user_id', 'fc4621b4-2591-49e6-879f-9551fa952392');

        if (error) {
            console.error('Database error (links):', error.message);
            return [];
        }

        try {
            const validatedData = LinkArraySchema.parse(data); // Validate the array of links
            // console.log('Validated links:', validatedData);
            return validatedData;
        } catch (validationError) {
            console.error('Validation error (links):', validationError.errors);
            return [];
        }
    }

    return {
        // isAuthenticated : await isAuthenticated(),
        links: await getUserLinks(), // Await the function to resolve the promise
        userInfo: await getUserInfo(), // Await the function to resolve the promise
    };
}
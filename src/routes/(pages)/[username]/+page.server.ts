

export async function load({ locals: { supabase }, params }) {

    /**
     * Checks to see if the user is the Owner of the account
     * Different to isAuthenticated cuz someone can be authenticated but
     * they shouldnt be able to access someone elses account
     */
    async function isOwner(): Promise<boolean> {
        const { data, error } = await supabase.auth.getUser();
        if (!error) {
            return data?.user?.user_metadata?.username === params.username
        } else {
            console.log("Error getting user : ", error)
            return false
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
            .eq('username', params.username);

        if (error) {
            console.error('Database error (links):', error.message);
            return [];
        } else {
            return data
        }

    }

    return {
        isOwner: await isOwner(),
        links: await getUserLinks(), // Await the function to resolve the promise
        userInfo: await getUserInfo(), // Await the function to resolve the promise
    };
}
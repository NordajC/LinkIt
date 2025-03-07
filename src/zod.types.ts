import { z } from "zod";

export const UserInfoSchema = z.object({
    id: z.string().uuid(),
    theme: z.enum(['Default', 'Mocha', 'Nord', 'Gruvbox']), // Fixed enum values
});

export const LinkSchema = z.object({
    // TODO still need to decide if we should add the user id or not
    // id: z.number({
    //     required_error: "ID is required",
    //     invalid_type_error: "ID must be a number",
    // }),
    username: z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }),
   url: z.string({
        required_error: "URL is required",
        invalid_type_error: "URL must be a string",
    }).url("Invalid URL format"),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    description: z.string({
        invalid_type_error: "Description must be a string",
    }).nullable(),
    icon: z.string({
        invalid_type_error: "Icon must be a string",
    }).nullable(),
});

export const LinkArraySchema = z.array(LinkSchema);
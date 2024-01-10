import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "title required",
    }),
    description: z.string({
        required_error:"Description required and must be a string",
    }).min(1, {
        message: "Description required is empty"
    }),
    date: z.string().datetime().optional(),
}); 
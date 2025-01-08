import { z } from "zod";

export const registerUserSchema = z.object({
    unique_identifier: z.number({
        required_error: "Required Field",
    }) 
    .int() 
    .gte(100000000) 
    .lte(999999999),
    role: z.enum(["Admin", "Fleet Manager", "HR Administrator"]),
    password: z.string().min(6)
})

export const loginUserSchema = z.object({
    unique_identifier: z.number({
        required_error: "Required Field",
    }) 
    .int() 
    .gte(100000000) 
    .lte(999999999),
    password: z.string().min(6)
})
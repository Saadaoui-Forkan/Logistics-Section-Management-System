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

export const addEmployeeSchema = z.object({
    full_name: z.string().min(6),
    email: z.string().email(),
    unique_identifier: z.number().int().gte(100000000).lte(999999999),
    phone_number: z.number().int().gte(10000000).lte(99999999),
    date_of_birth: z.string().date(),
    position: z.string().min(4),
    department: z.string().min(4),
})

export const addEmployeeStatusSchema = z
  .object({
    status: z.enum(["Active", "Paid Leave", "Unpaid Leave", "Absent"]),
    from: z.coerce.date(), 
    to: z.coerce.date(),
  })
  .refine((data) => data.to >= data.from, {
    message: "'to' must be after 'from'",
    path: ["to"],
  });
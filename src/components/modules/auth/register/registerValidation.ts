import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be between 2 and 50 characters")
    .max(50, "Name must be between 2 and 50 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  role: z
    .string({ required_error: "Role is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(8, "Phone must be at least 11 characters"),
  passwordConfirm: z
    .string({ required_error: "Password Confirmation is required" })
    .min(1),
});

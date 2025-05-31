import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Numele este obligatoriu"),
    email: z.string().email("Adresa de email nu este validă"),
    password: z
      .string()
      .min(8, "Parola trebuie să aibă minim 8 caractere")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Parola trebuie să conțină cel puțin o literă mică, o literă mare și un număr"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parolele nu coincid",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

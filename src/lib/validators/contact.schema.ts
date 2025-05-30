import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Numele este obligatoriu." }),
  email: z.string().email({ message: "Adresă de email invalidă." }),
  phone: z.string().optional(),
  apartments: z.coerce.number().optional(),
  subject: z.string().min(1, { message: "Subiectul este obligatoriu." }),
  message: z
    .string()
    .min(10, { message: "Mesajul trebuie să conțină cel puțin 10 caractere." }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Trebuie să accepți termenii și condițiile.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

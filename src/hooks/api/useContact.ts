import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { ContactFormData } from "@/lib/validators/contact.schema";

export function useSendContactForm() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await api.post("/contact", data);
      return response.data;
    },
  });
}

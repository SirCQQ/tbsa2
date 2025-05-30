"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validators/contact.schema";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledTextarea,
} from "../ui/inputs/form";
import { useSendContactForm } from "@/hooks/api/useContact";
import type { AxiosError } from "axios";
import { Loader2 } from "lucide-react";

function isObjectWithMessage(data: unknown): data is { message: string } {
  return (
    typeof data === "object" &&
    data !== null &&
    "message" in data &&
    typeof (data as { message?: unknown }).message === "string"
  );
}

function isAxiosErrorWithMessage(
  error: unknown
): error is AxiosError<{ message: string }> {
  return (
    typeof error === "object" &&
    error !== null &&
    "isAxiosError" in error &&
    (error as AxiosError).isAxiosError === true &&
    (error as AxiosError).response?.data !== undefined &&
    isObjectWithMessage((error as AxiosError).response!.data)
  );
}

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      apartments: 0,
      subject: "",
      message: "",
      termsAccepted: false,
    },
  });

  const sendContact = useSendContactForm();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContact.mutateAsync(data);
      toast.success("Mesajul tău a fost trimis cu succes!");
      form.reset();
    } catch (error: unknown) {
      let message =
        "A apărut o eroare la trimiterea mesajului. Încearcă din nou.";
      if (isAxiosErrorWithMessage(error)) {
        message = error.response!.data.message;
      }
      toast.error(message);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <ControlledInput<ContactFormData>
            name="name"
            label="Nume"
            placeholder="Numele tău"
            required
          />
          <ControlledInput<ContactFormData>
            name="email"
            label="Email"
            type="email"
            placeholder="email@exemplu.com"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ControlledInput<ContactFormData>
            name="phone"
            label="Telefon (Opțional)"
            placeholder="+40 123 456 789"
          />
          <ControlledInput<ContactFormData>
            name="apartments"
            label="Număr apartamente (Opțional)"
            type="number"
            placeholder="ex. 50"
          />
        </div>

        <ControlledInput<ContactFormData>
          name="subject"
          label="Subiect"
          placeholder="Despre ce vrei să discutăm?"
          required
        />

        <ControlledTextarea<ContactFormData>
          name="message"
          label="Mesaj"
          placeholder="Spune-ne mai multe despre nevoile asociației tale..."
          rows={4}
          required
        />

        <ControlledCheckbox<ContactFormData>
          name="termsAccepted"
          label={
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Sunt de acord cu{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Termenii și Condițiile
              </a>{" "}
              și{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Politica de Confidențialitate
              </a>
            </span>
          }
          required
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting || sendContact.isPending}
        >
          {form.formState.isSubmitting || sendContact.isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" />
              Se trimite...
            </span>
          ) : (
            "Trimite mesajul"
          )}
        </Button>
      </form>
    </FormProvider>
  );
}

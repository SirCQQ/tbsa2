"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import {
  ControlledInput,
  ControlledPassword,
} from "@/components/ui/inputs/form";

const registerSchema = z.object({
  name: z.string().min(1, "Numele este obligatoriu"),
  email: z.string().email("Adresa de email nu este validă"),
  password: z.string().min(8, "Parola trebuie să aibă cel puțin 8 caractere"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "A apărut o eroare la înregistrare");
      }

      router.push("/auth/login?registered=true");
    } catch (error) {
      form.setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "A apărut o eroare la înregistrare",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <ControlledInput
              name="name"
              label="Nume"
              placeholder="Ion Popescu"
              required
              className="bg-background text-sm sm:text-base"
            />
            <ControlledInput
              name="email"
              label="Email"
              type="email"
              placeholder="nume@exemplu.com"
              required
              className="bg-background text-sm sm:text-base"
            />
            <ControlledPassword
              name="password"
              label="Parolă"
              required
              className="bg-background text-sm sm:text-base"
            />
          </div>

          {form.formState.errors.root && (
            <div className="text-sm text-destructive text-center">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button
            className="w-full text-sm sm:text-base"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Înregistrare
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Sau continuați cu
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="w-full text-sm sm:text-base"
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>

        <div className="text-center text-xs text-muted-foreground sm:text-sm">
          Aveți deja cont?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Autentificați-vă
          </Link>
        </div>
      </div>
    </div>
  );
}

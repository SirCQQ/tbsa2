import { Metadata } from "next";
import { RegisterForm } from "./register-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Înregistrare | TBSA",
  description: "Creează un cont nou în aplicația TBSA",
};

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 top-0 -ml-40 -mt-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mb-40 -mr-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      {/* Content */}
      <div className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6">
        <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
          <Image
            src="/logo.png"
            alt="TBSA Logo"
            width={120}
            height={40}
            className="h-8 w-auto dark:invert sm:h-10"
            priority
          />
        </div>
        <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-4 sm:space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Creează un cont nou
            </h1>
            <p className="text-sm text-muted-foreground">
              Introduceți datele pentru a vă înregistra
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg" />
            <div className="relative rounded-lg bg-background/95 p-4 shadow-lg backdrop-blur sm:p-6">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

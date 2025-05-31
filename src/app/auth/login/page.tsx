import { Metadata } from "next";
import { LoginForm } from "./login-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autentificare | TBSA",
  description: "Autentificați-vă în aplicația TBSA",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background to-muted">
      <div className="container relative flex h-screen flex-col items-center justify-center">
        <div className="absolute left-4 top-4">
          <Image
            src="/logo.png"
            alt="TBSA Logo"
            width={120}
            height={40}
            className="dark:invert"
          />
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bine ați venit!
            </h1>
            <p className="text-sm text-muted-foreground">
              Autentificați-vă pentru a accesa aplicația
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

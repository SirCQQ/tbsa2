import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import type { User } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

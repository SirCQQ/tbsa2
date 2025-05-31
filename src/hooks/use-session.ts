"use client";

import { useSession as useNextAuthSession } from "next-auth/react";

export function useSession() {
  const session = useNextAuthSession();

  return {
    session: session.data,
    isLoading: session.status === "loading",
    isAuthenticated: session.status === "authenticated",
  };
}

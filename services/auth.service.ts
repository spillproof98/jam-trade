import { api } from "./api";
import type { AuthResponse } from "@/types/user";

export const authService = {
  login(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    return api<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  signup(
    email: string,
    password: string
  ): Promise<void> {
    return api<void>("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  logout(): Promise<void> {
    return api<void>("/api/auth/logout", {
      method: "POST",
    });
  },
};

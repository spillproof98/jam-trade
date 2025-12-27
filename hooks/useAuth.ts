"use client";

import { useAuthStore } from "@/store/authSlice";
import { authService } from "@/services/auth.service";

export function useAuth() {
  const { user, token, login: setAuth, logout: clearAuth } =
    useAuthStore();

  const login = async (email: string, password: string) => {
    const res = await authService.login(email, password);
    setAuth(res.user, res.accessToken);
  };

  const signup = async (email: string, password: string) => {
    await authService.signup(email, password);
  };

  const logout = async () => {
    await authService.logout();
    clearAuth();
  };

  return {
    user,
    token,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };
}

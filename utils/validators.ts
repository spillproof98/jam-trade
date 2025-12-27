export const isEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isStrongPassword = (password: string) =>
  password.length >= 8;

export const isPositiveNumber = (n: number) => n > 0;

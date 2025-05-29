// Application constants
export const APP_NAME = "AquaSync";
export const APP_DESCRIPTION =
  "Platforma Digitală pentru Administrarea Asociațiilor de Proprietari";

// API Routes
export const API_ROUTES = {
  AUTH: "/api/auth",
  USERS: "/api/users",
  ASSOCIATIONS: "/api/associations",
  BUILDINGS: "/api/buildings",
  APARTMENTS: "/api/apartments",
  READINGS: "/api/readings",
  PAYMENT_LISTS: "/api/payment-lists",
} as const;

// App Routes
export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
} as const;

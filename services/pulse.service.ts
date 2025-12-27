import { api } from "./api";

export const pulseService = {
  fetchPulse() {
    return api("/api/pulse");
  },
};

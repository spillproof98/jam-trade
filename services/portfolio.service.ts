import { api } from "./api";

export const portfolioService = {
  fetchPortfolio() {
    return api("/api/portfolio");
  },
};

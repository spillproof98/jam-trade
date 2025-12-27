import { api } from "./api";

export const tradingService = {
  placeOrder(order: any) {
    return api("/api/trading", {
      method: "POST",
      body: JSON.stringify(order),
    });
  },
};

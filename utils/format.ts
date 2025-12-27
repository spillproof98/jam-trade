export const formatNumber = (num: number, decimals = 2) =>
  Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);

export const formatCurrency = (num: number, currency = "USD") =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(num);

export const shortenAddress = (addr: string, chars = 4) =>
  `${addr.slice(0, chars)}...${addr.slice(-chars)}`;

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function getEstimatedDelivery() {
  return `${Math.floor(Math.random() * 4) + 2}–5 business days`;
}

export function truncate(text, maxLength = 110) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

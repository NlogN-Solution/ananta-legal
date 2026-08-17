export const WHATSAPP_NUMBER = '9779768585046'; // +977 9768585046, no "+"/spaces

export function whatsappUrl(message = "Hi Ananta Legal, I'd like to book a free consultation call.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

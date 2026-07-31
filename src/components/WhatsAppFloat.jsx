import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2557868441951"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "05320550945";

  return (
    <a
      href={`https://wa.me/9${phoneNumber}?text=${encodeURIComponent("Merhaba, taputakipmerkezi.com sitesinden yazıyorum/bilgi almak istiyorum.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;

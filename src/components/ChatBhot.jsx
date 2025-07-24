import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function ChatBhot() {
  return (
    <a
      href="https://wa.me/919326337850"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
    >
      <WhatsAppIcon />
    </a>
  );
}

export default ChatBhot;

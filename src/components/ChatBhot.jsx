import React from "react";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";

function ChatBhot() {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-[#00FF33] w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <TextsmsRoundedIcon />
    </div>
  );
}

export default ChatBhot;

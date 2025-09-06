
import React from "react";

const ChatButton = () => {
  return (
    <button
      className="
        fixed bottom-6 right-6
        bg-green-500 hover:bg-green-600
        text-white px-6 py-3
        rounded-full shadow-lg
        z-50
      "
    >
      Chat with AI
    </button>
  );
};

export default ChatButton;

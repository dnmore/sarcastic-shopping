import { useState } from "react";
import Chatbot from "./Chatbot";

import { FaRobot } from "react-icons/fa6";

export default function ChatbotIcon() {
  const [chatbotIsActive, setChatbotIsActive] = useState(false);

  const toggleChatbotIsActive = () => setChatbotIsActive(!chatbotIsActive);

  return (
    <div>
      <div
        className="cursor-pointer fixed right-2 bottom-2 "
        onClick={toggleChatbotIsActive}
      >
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "#116DFF",
            color: "#fff",
          }}
          className="flex flex-col justify-center items-center text-3xl"
        >
          <FaRobot />
        </div>
      </div>
      {chatbotIsActive && <Chatbot />}
    </div>
  );
}

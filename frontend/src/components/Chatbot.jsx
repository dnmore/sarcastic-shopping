import { useState, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";

import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  const handleMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");

      setTimeout(() => {
        getSarcasticResponse(newMessage.text);
      }, 100);
    }
  };

  const getSarcasticResponse = () => {
    const sarcasticResponses = [
      "Help? That’s my middle name! Actually, it's 'Bot,' but let’s not get caught up in details.",
      "Fascinating. Please, tell me more. Or not.",
      "Oh, absolutely! I’m here to assist... or at least to pretend I know what I’m doing.",
      "Wow, you're so original. I've never heard that before.",
      "Why don't you try turning it off and on again?",
      "I’m on it! Just let me take a deep breath and remember that I’m not programmed to panic.",
      "I'm sorry, I can't help with that. Maybe try asking a rock?",
    ];

    const nextResponse = sarcasticResponses[responseIndex];
    setResponseIndex(
      (prevIndex) => (prevIndex + 1) % sarcasticResponses.length
    );
    const botMessage = { text: nextResponse, sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  return (
    <div className="fixed bottom-2 right-20 z-10">
      <div
        className="flex flex-col border-2 border-gray-200 shadow-lg rounded-md  bg-white"
        style={{
          height: "400px",
          width: "250px",
        }}
      >
        <div className="flex items-center gap-2 p-4">
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

          <div className="flex flex-col justify-center">
            <h3 className="font-bold leading-none">Sarcastic Chatbot</h3>
            <p className="text-xs text-gray-400">Online (Maybe)</p>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg shadow-sm chatbot-message ${message.sender}`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center p-2 gap-3 ">
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && handleMessage()}
              className="rounded-md min-w-56 border-0 bg-gray-200 py-1.5 px-2 text-gray-900 shadow-sm ring-0 placeholder:text-gray-500 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-2-indigo-600 outline-none sm:text-sm sm:leading-6"
              placeholder="Write here and cross your fingers"
            />
          </div>

          <IoSend
            onClick={handleMessage}
            className="text-xl cursor-pointer hover:opacity-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

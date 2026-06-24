import React, { useState } from "react";
import axios from "axios";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = {
      sender: "user",
      text: prompt,
    };

    setMessages(prev => [...prev, userMessage]);

    const res = await axios.post("/api/ai/ask", {
      prompt,
    });

    const aiMessage = {
      sender: "ai",
      text: res.data.answer,
    };

    setMessages(prev => [...prev, aiMessage]);

    setPrompt("");
  };

  return (
    <div className="p-4">

      <div className="space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "bg-blue-500 text-white p-2 rounded"
                : "bg-gray-700 text-white p-2 rounded"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <input
        className="border p-2 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI..."
      />

      <button
        onClick={sendPrompt}
        className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded"
      >
        Send
      </button>

    </div>
  );
};

export default AIChat;
import React, { useState } from "react";
import "./Chatbot.css";
import logo from "../src/assets/logo.png"; // your logo path

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hai! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // After reply, show WhatsApp button
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "💬 You can share your enquiries directly on WhatsApp:",
          sender: "bot",
        },
      ]);
      setShowWhatsApp(true);
    }, 800);
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
          <img src={logo} alt="Bot Logo" className="bot-logo" />
          <span className="bot-name">Hai</span>
        </div>

        {/* Chat Window */}
        {isOpen && (
          <div className="chat-window">
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="bot-icon-text">
                      <img src={logo} alt="Bot" className="bot-icon" />
                      <span className="hai-text">Hai</span>
                    </div>
                  )}
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            {showWhatsApp && (
              <a
                href="https://wa.me/919995528426"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            )}

            {/* Input box */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;

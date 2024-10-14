import React from "react";
import { Message } from "./ResponseGenerated";

interface ChatboxProps {
  messages: Message[];
}

const Chatbox: React.FC<ChatboxProps> = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.isUserMessage ? "justify-end" : "justify-start"
          }`}>
          <div
            className={`${
              message.isUserMessage ? "bg-muted" : "bg-secondary"
            } p-4 rounded-lg max-w-2xl text-foreground`}>
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatbox;

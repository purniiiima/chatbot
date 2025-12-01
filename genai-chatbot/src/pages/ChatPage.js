import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import InputBar from "../components/InputBar";
import { askBot } from "../services/api";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const sendToBot = async (text) => {
    setMessages(prev => [...prev, { from: "user", text }]);

    const res = await askBot(text);

    setMessages(prev => [...prev, { from: "bot", text: res }]);
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="chat-area">
        <ChatBox messages={messages} />
        <InputBar onSend={sendToBot} />
      </div>
    </div>
  );
}

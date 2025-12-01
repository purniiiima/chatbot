export default function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((m, i) => (
        <div key={i} className={`msg ${m.from}`}>{m.text}</div>
      ))}
    </div>
  );
}

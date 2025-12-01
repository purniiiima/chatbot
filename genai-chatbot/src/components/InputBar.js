export default function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="input-area">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
}

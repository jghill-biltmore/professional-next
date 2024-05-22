import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  return (
    <textarea
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
      value={text}
    />
  );
}

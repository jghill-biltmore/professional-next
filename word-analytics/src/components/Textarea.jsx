import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const numberOfCharacters = text.length;

  // Basic validation
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning("No scripts tags allowed.");
    } else if (/@/.test(newText)) {
      newText = newText.replace("@", "");
      setWarning("No @ symbols allowed.");
    } else setWarning("");
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      />
      {warning && <Warning>{warning}</Warning>}
    </div>
  );
}

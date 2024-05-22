import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning("No scripts tags allowed.");
      setShowWarning(true);
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarning("No @ symbols allowed.");
      setShowWarning(true);
    }
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
      {showWarning && <Warning>{warning}</Warning>}
    </div>
  );
}

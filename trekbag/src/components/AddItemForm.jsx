import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      checked: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}

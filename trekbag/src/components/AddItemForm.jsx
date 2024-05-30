import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const addItem = useItemsStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
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

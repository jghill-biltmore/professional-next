import { useState } from "react";
import { LIST_ITEMS_INIT } from "./lib/constants";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.checked} /> {item.name}
      </label>
      <button>
        <IoMdRemoveCircleOutline />
      </button>
    </li>
  );
}

export default function ItemList() {
  const [items, setItems] = useState(LIST_ITEMS_INIT);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

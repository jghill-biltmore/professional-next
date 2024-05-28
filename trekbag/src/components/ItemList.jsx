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

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

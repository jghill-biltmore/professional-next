import { IoMdRemoveCircleOutline } from "react-icons/io";
import EmptyView from "./EmptyView";

function Item({ item, onDeleteItem, onTogglePackedItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onTogglePackedItem(item.id)}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>
        <IoMdRemoveCircleOutline />
      </button>
    </li>
  );
}

export default function ItemList({
  items,
  handleDeleteItem,
  handleTogglePackedItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onTogglePackedItem={handleTogglePackedItem}
        />
      ))}
    </ul>
  );
}

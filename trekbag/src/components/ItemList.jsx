import { IoMdRemoveCircleOutline } from "react-icons/io";

function Item({ item, handleDeleteItem, handleTogglePackedItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleTogglePackedItem(item.id)}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>
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
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleTogglePackedItem={handleTogglePackedItem}
        />
      ))}
    </ul>
  );
}

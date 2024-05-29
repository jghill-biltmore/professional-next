import { IoMdRemoveCircleOutline } from "react-icons/io";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState } from "react";

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

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleTogglePackedItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "packed") {
      return b.checked - a.checked;
    }

    if (sortBy == "unpacked") {
      return a.checked - b.checked;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
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

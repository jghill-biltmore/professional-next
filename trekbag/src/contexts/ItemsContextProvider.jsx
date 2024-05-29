import { createContext, useEffect, useState } from "react";
import { LIST_ITEMS_INIT } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || LIST_ITEMS_INIT
  );

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      checked: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  const handleTogglePackedItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleMarkAllItemsComplete = () => {
    const newItems = items.map((item) => ({ ...item, checked: true }));
    setItems(newItems);
  };

  const handleMarkAllItemsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, checked: false }));
    setItems(newItems);
  };

  const handleResetAllItems = () => {
    setItems(LIST_ITEMS_INIT);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleTogglePackedItem,
        handleMarkAllItemsComplete,
        handleMarkAllItemsIncomplete,
        handleResetAllItems,
        handleRemoveAllItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

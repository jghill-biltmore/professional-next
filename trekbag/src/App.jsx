import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { LIST_ITEMS_INIT } from "./components/lib/constants";

function App() {
  const [items, setItems] = useState(LIST_ITEMS_INIT);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleTogglePackedItem={handleTogglePackedItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllItemsComplete={handleMarkAllItemsComplete}
          handleMarkAllItemsIncomplete={handleMarkAllItemsIncomplete}
          handleResetAllItems={handleResetAllItems}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

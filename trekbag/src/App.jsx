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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { create } from "zustand";
import { LIST_ITEMS_INIT } from "../lib/constants";

export const useItemsStore = create((set) => ({
  items: LIST_ITEMS_INIT,
  addItem: (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      checked: false,
    };

    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteItem: (itemId) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== itemId);
      return { items: newItems };
    });
  },
  togglePackedItem: (itemId) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return { items: newItems };
    });
  },
  markAllItemsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, checked: true }));
      return { items: newItems };
    });
  },
  markAllItemsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, checked: false }));
      return { items: newItems };
    });
  },
  resetAllItems: () => {
    set(() => ({ items: LIST_ITEMS_INIT }));
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
}));

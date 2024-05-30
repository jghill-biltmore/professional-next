import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: useItemsStore((state) => state.markAllItemsComplete),
    },
    {
      text: "Mark all as incomplete",
      onClick: useItemsStore((state) => state.markAllItemsIncomplete),
    },
    { text: "Reset", onClick: useItemsStore((state) => state.resetAllItems) },
    {
      text: "Remove all items",
      onClick: useItemsStore((state) => state.removeAllItems),
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} buttonType="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
}

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (e) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      }
      if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) return 5;
        return newCount;
      }
    });

    e.currentTarget.blur();
  };

  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}

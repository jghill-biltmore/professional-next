import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type }) {
  const handleClick = () =>
    setCount((prev) => {
      if (type === "minus") return prev - 1;
      if (type === "plus") return prev + 1;
    });

  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}

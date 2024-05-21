import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type }) {
  return (
    <button className="count-btn" onClick={() => setCount((prev) => prev + 1)}>
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

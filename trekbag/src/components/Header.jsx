import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "./lib/hooks";

export default function Header() {
  const { items } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        totalItems={items.length}
        itemsPacked={items.filter((item) => item.checked).length}
      />
    </header>
  );
}

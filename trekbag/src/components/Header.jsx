import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalItems, itemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} itemsPacked={itemsPacked} />
    </header>
  );
}

export default function Counter({ totalItems, itemsPacked }) {
  return (
    <p>
      <b>{itemsPacked}</b> / {totalItems} items packed
    </p>
  );
}

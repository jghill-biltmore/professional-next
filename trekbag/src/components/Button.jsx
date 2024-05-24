export default function Button({ children, type }) {
  return (
    <button className={`btn ${type && "btn--secondary"}`}>{children}</button>
  );
}

export default function Button({ children, buttonType, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType && "btn--secondary"}`}
    >
      {children}
    </button>
  );
}

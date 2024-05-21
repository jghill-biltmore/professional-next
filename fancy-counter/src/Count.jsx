function CountTitle() {
  return <h2>Current count is:</h2>;
}

export default function Count({ number, size }) {
  return (
    <div>
      <CountTitle />
      <p>{number}</p>
    </div>
  );
}

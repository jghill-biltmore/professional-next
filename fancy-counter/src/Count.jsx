function CountTitle() {
  return <h2>Current count is:</h2>;
}

export default function Count({ number, size }) {
  return (
    <>
      <CountTitle />
      <p>{number}</p>
    </>
  );
}

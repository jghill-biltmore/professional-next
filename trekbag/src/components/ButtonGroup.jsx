import Button from "./Button";

const buttons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttons.map((btn) => (
        <Button key={btn} type="secondary">
          {btn}
        </Button>
      ))}
    </section>
  );
}

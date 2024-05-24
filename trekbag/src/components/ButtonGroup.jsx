import Button from "./Button";
import { SIDE_BUTTONS } from "./lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {SIDE_BUTTONS.map((btn) => (
        <Button key={btn} type="secondary">
          {btn}
        </Button>
      ))}
    </section>
  );
}

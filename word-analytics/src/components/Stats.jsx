import { H2 } from "./Headings";

function Stat({ label, number = 0 }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <H2>{label}</H2>
    </section>
  );
}

export default function Stats({ numberOfCharacters }) {
  return (
    <section className="stats">
      <Stat label="Words" />
      <Stat label="Characters" number={numberOfCharacters} />
      <Stat label="Instagram" number={280} />
      <Stat label="Facebook" number={2200} />
    </section>
  );
}

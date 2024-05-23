import { H2 } from "./Headings";

function Stat({ label, number = 0 }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <H2>{label}</H2>
    </section>
  );
}

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberOfWords} />
      <Stat label="Characters" number={stats.numberOfCharacters} />
      <Stat label="Instagram" number={stats.instaCharactersLeft} />
      <Stat label="Facebook" number={stats.facebookCharactersLeft} />
    </section>
  );
}

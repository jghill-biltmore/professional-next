import { H2 } from "./Headings";

function Stat({ label, number = 0 }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <H2>{label}</H2>
    </section>
  );
}

export default function Stats({
  numberOfWords,
  numberOfCharacters,
  instaCharactersLeft,
  facebookCharactersLeft,
}) {
  return (
    <section className="stats">
      <Stat label="Words" number={numberOfWords} />
      <Stat label="Characters" number={numberOfCharacters} />
      <Stat label="Instagram" number={instaCharactersLeft} />
      <Stat label="Facebook" number={facebookCharactersLeft} />
    </section>
  );
}

import { H2 } from "./Headings";

export default function Stats() {
  return (
    <section className="stats">
      <section className="stat">
        <span className="stat__number">0</span>
        <H2>Words</H2>
      </section>
      <section className="stat">
        <span className="stat__number">0</span>
        <H2>Characters</H2>
      </section>
      <section className="stat">
        <span className="stat__number">280</span>
        <H2>Instagram</H2>
      </section>
      <section className="stat">
        <span className="stat__number">2200</span>
        <H2>Facebook</H2>
      </section>
    </section>
  );
}

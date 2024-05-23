import BackgroundImage from "./BackgroundImage";
import { H1 } from "./Headings";

export default function Header() {
  return (
    <header>
      <BackgroundImage />
      <H1>
        Word<span className="first-heading--thin">Analytics</span>
      </H1>
    </header>
  );
}

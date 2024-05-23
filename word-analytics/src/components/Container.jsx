import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instaCharactersLeft: INSTAGRAM_MAX_CHARS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

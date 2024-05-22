export default function Textarea() {
  return (
    <textarea
      onChange={(e) => console.log(e.target.value)}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}

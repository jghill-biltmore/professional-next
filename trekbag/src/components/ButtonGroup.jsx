import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllItemsComplete,
  handleMarkAllItemsIncomplete,
  handleResetAllItems,
  handleRemoveAllItems,
}) {
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllItemsComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllItemsIncomplete },
    { text: "Reset", onClick: handleResetAllItems },
    { text: "Remove all items", onClick: handleRemoveAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          buttonType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </section>
  );
}

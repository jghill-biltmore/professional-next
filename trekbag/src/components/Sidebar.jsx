import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllItemsComplete,
  handleMarkAllItemsIncomplete,
  handleResetAllItems,
  handleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllItemsComplete={handleMarkAllItemsComplete}
        handleMarkAllItemsIncomplete={handleMarkAllItemsIncomplete}
        handleResetAllItems={handleResetAllItems}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}

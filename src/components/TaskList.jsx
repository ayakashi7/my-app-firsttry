import Task from "./Task";

export default function TaskList({
  todos,
  onDeleted,
  onToggleCompleted,
  onEditClick,
  onUpdateDescription,
}) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task
          key={item.id}
          description={item.description}
          completed={item.completed}
          editing={item.editing}
          created={item.created}
          onDeleted={() => onDeleted(item.id)}
          onToggleCompleted={() => onToggleCompleted(item.id)}
          onEditClick={() => onEditClick(item.id)}
          onUpdateDescription={(newText) =>
            onUpdateDescription(item.id, newText)
          }
        />
      ))}
    </ul>
  );
}

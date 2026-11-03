import Task from "./Task";

export default function TaskList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task
          key={item.id}
          description={item.description}
          completed={item.completed}
          editing={item.editing}
        />
      ))}
    </ul>
  );
}

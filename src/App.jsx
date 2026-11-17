import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      created: "created 17 seconds ago",
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      created: "created 5 minutes ago",
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      created: "created 5 minutes ago",
    },
  ]);

  // udalit zadachu po idishke
  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };
  // sdelano/ne sdelano
  const toggleTaskCompleted = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  // popravka/edit
  const handleEditClick = (id) => {
    setTodos(
      todos.map((task) => (task.id === id ? { ...task, editing: true } : task)),
    );
  };

  // description
  const handleUpdateDescription = (id, newDescription) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task,
      ),
    );
  };
  //  main-container-app
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        {/* peredayu todos */}
        <TaskList
          todos={todos}
          onDeleted={deleteTask}
          onToggleCompleted={toggleTaskCompleted}
          onEditClick={handleEditClick}
          onUpdateDescription={handleUpdateDescription}
        />

        {/* footer */}
        <Footer todoCount={todos.filter((t) => !t.completed).length} />
      </section>
    </section>
  );
}

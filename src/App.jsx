import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default function App() {
  const [todos] = useState([
    { id: 1, description: "Completed task", completed: true, editing: false },
    { id: 2, description: "Editing task", completed: false, editing: true },
    { id: 3, description: "Active task", completed: false, editing: false },
  ]);

  //  main-container-app
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        {/* peredayu todos */}
        <TaskList todos={todos} />

        {/* footer */}
        <Footer todoCount={todos.filter((t) => !t.completed).length} />
      </section>
    </section>
  );
}

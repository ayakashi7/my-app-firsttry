export default function Footer({ todoCount }) {
  return (
    <footer className="footer">
      {/* schitaet ostatok zadach */}
      <span className="todo-count">{todoCount} item left</span>

      <ul className="filters">
        <li>
          <button className="selected">ALL</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>

      <button className="class-completed">Clear completed</button>
    </footer>
  );
}

import { useState } from "react";

export default function Task({
  description,
  completed,
  created,
  onDeleted,
  onToggleCompleted,
  // onEditClick,
  onUpdateDescription,
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(description);

  let classNames = editing ? "editing" : completed ? "completed" : "";
  // if (completed) classNames += "completed";

  // if (editing) classNames += "editing";

  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        {/* btn-editing */}
        <button
          className="icon icon-edit"
          onClick={() => setEditing((prev) => !prev)}
        ></button>
        {/* btn-deleted */}
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setEditing((prev) => !prev);
            if (value) {
              onUpdateDescription(value); //rabotaet po enter
            }
          }}
        ></input>
      )}
    </li>
  );
}

export default function Task({ description, completed, editing }) {
  let classNames = "";
  if (completed) classNames += "completed";
  if (editing) classNames += "editing";

  return (
    <li className={classNames}>
      <div className="view">
        <input class="toggle" type="checkbox" defaultChecked={completed} />
        <label>
          <span class="description">Completed task</span>
          <span class="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button class="icon icon-destroy"></button>
      </div>
      {editing && (
        <input type="text" className="edit" defaultValue={description}></input>
      )}
    </li>
  );
}

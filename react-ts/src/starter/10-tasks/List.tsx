import { Task } from "./ListLogic";

type Props = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

const List = ({ tasks, toggleTask }: Props) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id}>
          <p className="task-text">{task.description}</p>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;

import type { Task } from "./ListLogic";
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const index = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const addItem = (item: Task) => {
    setTasks([...tasks, item]);
  };
  const clearAll = (): void => {
    setTasks([]);
    localStorage.clear();
  };
  const toggleTask = (id: string) => {
    console.log(id);
    setTasks(
      tasks.map((task: Task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <div>
      <Form type={"light"} addItem={addItem} clearAll={clearAll} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default index;

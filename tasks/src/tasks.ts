console.log("TASKS");
import "./tasks.css";

// // const testBtn = document.querySelector<HTMLButtonElement>(".test-btn")!;

// // we basically need to tell TS that .test-btn exist in the application
// // so either ! at the end of deceleration or
// // ? before using it so build time check
// // const testBtn = document.querySelector(".test-btn")!;
// // testBtn?.ATTRIBUTE_NODE;
// // console.log((testBtn.disabled = true));
const taskForm = document.querySelector<HTMLInputElement>(".form");
const taskInput = document.querySelector<HTMLButtonElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
  created: Date;
};

const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const tasks: Task[] = loadTasks();

const updateTasksList = (task: Task): void => {
  tasks.push(task);
  return;
};

const renderTask = (task: Task): void => {
  const li = document.createElement("li");
  li.textContent = task.description;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  li.appendChild(taskCheckbox);
  taskList?.appendChild(li);
  return;
};

const addTask = (event: SubmitEvent) => {
  event.preventDefault();
  const inputValue = taskInput?.value;
  if (inputValue) {
    const newItem: Task = {
      description: inputValue,
      isCompleted: false,
      created: new Date(),
    };
    //add task to list
    updateTasksList(newItem);
    //render list
    renderTask(newItem);
    //update local storage
    updateStorage();
    taskInput.value = "";
    return;
  }
};
const updateStorage = (): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

tasks.forEach((task: Task) => {
  renderTask(task);
});

taskForm?.addEventListener("submit", addTask);

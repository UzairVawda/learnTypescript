import { useState } from "react";
import { Task } from "./ListLogic";

type FormProps = {
  addItem: (task: Task) => void;
  type: string;
  clearAll: () => void;
};

const Form = ({ addItem, type, clearAll }: FormProps) => {
  const [text, setText] = useState("");
  const updateList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) {
      alert("Enter A Task!");
      return;
    }
    addItem({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
      created: new Date(),
    });
    //  add task
    setText("");
  };

  return (
    <form
      className={
        type === `light`
          ? ` form task-form lightBlueBG `
          : ` form task-form darkBlueBG `
      }
      onSubmit={updateList}
      onReset={clearAll}
    >
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        add regular task
      </button>
      <button type="reset" className="btn">
        Clear All
      </button>
    </form>
  );
};

export default Form;

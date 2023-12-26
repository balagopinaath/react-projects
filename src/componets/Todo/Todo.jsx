import { useState } from "react";
import styles from "./Todo.module.css";

function Todo() {
  const [tasks, setTasks] = useState(["eat", "sleep", "code"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function removeTask(index) {
    const newUpdatedTask = tasks.filter((_, i) => i !== index);
    setTasks(newUpdatedTask);
  }

  function movesUp(index) {
    if (index > 0) {
      const newSwapTask = [...tasks];
      [newSwapTask[index], newSwapTask[index - 1]] = [
        newSwapTask[index - 1],
        newSwapTask[index],
      ];
      setTasks(newSwapTask);
    }
  }
  function movesDown(index) {
    if (index < tasks.length - 1) {
      const newSwapTask = [...tasks];
      [newSwapTask[index], newSwapTask[index + 1]] = [
        newSwapTask[index + 1],
        newSwapTask[index],
      ];
      setTasks(newSwapTask);
    }
  }

  return (
    <div className={styles.totoList}>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task..."
          onChange={handleInput}
        />
        <button
          className={`${styles.buttonFormat} ${styles.addButton}`}
          onClick={addNewTask}
        >
          add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={styles.text}>{task}</span>
            <button
              className={`${styles.buttonFormat} ${styles.moves}`}
              onClick={() => movesUp(index)}
            >
              Up ⬆
            </button>
            <button
              className={`${styles.buttonFormat} ${styles.delete}`}
              onClick={() => removeTask(index)}
            >
              Delete ❌
            </button>
            <button
              className={`${styles.buttonFormat} ${styles.moves}`}
              onClick={() => movesDown(index)}
            >
              Down ⬇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;

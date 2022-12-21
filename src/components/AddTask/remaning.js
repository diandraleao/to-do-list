import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [remaining, setRemaining] = useState(null);
  const [error, setError] = useState("");

  const handleTasks = (e) => {
    e.preventDefault();

    if (!task) {
      setError("Digite uma task");
      return;
    }

    const sanitizedTask = task.trim();
    if (tasks.includes(sanitizedTask)) {
      setError("Task já cadastrada");
      return;
    }

    setTasks((state) => [...state, {name: task, completed: false}]);
    setError("");
    setTask("");

    return;
  };

  const completeTask = (index) => {
    const newTasks = tasks;
    const completed = !tasks[index].completed;

    newTasks[index].completed = completed;

    setTasks([...newTasks]);

    return;
  };
  14/12 16h
  palestra
  const handleRemainTasks = (tasks) => {
    if (!tasks.length) return null;

    const newRemaining = tasks.reduce((acm, { completed }) => {
      if (completed) {
        return acm;
      }

      return (acm += 1);
    }, 0);

    setRemaining(newRemaining);
    return;
  };
  18/01 10h10 ana costa, 290 simone cristina
  useEffect(() => {
    handleRemainTasks(tasks);
  }, [tasks]);

  return (
    <>
      <h1>React ToDo list</h1>
      <form onSubmit={handleTasks}>
        <input
          type="text"
          placeholder="type a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleTasks}>add task</button>
      </form>
      {error && <span>{error}</span>}
      <br />
      {tasks.length >= 1 && (
        <span>
          {remaining} remaining out of {tasks.length}
        </span>
      )}
      <ul>
        {tasks.map(({ name, completed }, index) => (
          <li
            style={{
              textDecoration: completed ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={(_) => completeTask(index)}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

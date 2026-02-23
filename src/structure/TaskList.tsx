import { useEffect, useState } from "react";
import "./styles/tasklist.css";
import confetti from "canvas-confetti";

export function TaskList() {
  // Logica para añadir tareas, eliminar tareas, marcar tareas como completadas, etc.

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleClick = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const taskObject = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, taskObject]);
  };

  const toggleTask = (id) => {
    // Aquí iría la lógica para marcar una tarea como completada o no
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        const newState = !task.completed;

        if (newState) {
          confetti();
        }
        return { ...task, completed: newState };
      }
      return task;
    });
    setTasks(updatedTask);
  };


  const deleteTask = (id) => {
    const nuevasTareas = tasks.filter(task => task.id !== id);
    setTasks(nuevasTareas);
  }

  return (
    <main className="tasklist">
      <p>Task List</p>
      <div className="form">
        <input
          type="text"
          value={newTask}
          onChange={handleClick}
          placeholder="Escribe una tarea..."
        />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <button onClick={() => deleteTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

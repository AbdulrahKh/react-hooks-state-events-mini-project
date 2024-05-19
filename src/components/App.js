import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState(CATEGORIES);

  function deleteTask(index) {
    setTasks((current) => current.filter((currentTask, i) => i !== index));
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function handleChangeCategory(category) {
    setCategory(category);
    if (category === "All") {
      setTasks(TASKS);
    } else {
      setTasks(TASKS.filter((task) => task.category === category));
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        category={category}
        handleClick={handleChangeCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.slice(1)}
        onTaskFormSubmit={addTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

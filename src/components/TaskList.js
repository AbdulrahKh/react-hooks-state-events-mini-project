import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  const taskView = [];
  for (let i = 0; i < tasks.length; i++) {
    taskView.push(
      <Task
        key={`task${i}`}
        text={tasks[i].text}
        category={tasks[i].category}
        deleteTask={() => deleteTask(i)}
      />
    );
  }

  return <div className="tasks">{taskView}</div>;
}

export default TaskList;

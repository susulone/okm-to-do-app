import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Task } from "../Task";
import "./CurrentTasks.css";

export const CurrentTasks = () => {
  const { tasks } = useContext(DataContext);

  return (
    <div className="CurrentTasks__Body">
      {tasks.map((task, index) => {
        return (
          <Task
            index={index}
            task={task}
            key={task.id}
            id={task.id}
            taskDescription={task.taskDescription}
            categories={task.categories}
            timeCreated={task.timeCreated}
          />
        );
      })}
    </div>
  );
};

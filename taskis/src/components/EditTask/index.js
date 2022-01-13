import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { EditTaskForm } from "../EditTaskForm";
import "./EditTask.css";

export const EditTask = () => {
  const { tasks } = useContext(DataContext);
  const { id } = useParams();
  const task = tasks.find((task) => task.id.toString() === id);

  return (
    <section className="FakeModal">
      <div className="Overlay">
        <div className="EditModal">
          <EditTaskForm task={task} />
        </div>
      </div>
    </section>
  );
};

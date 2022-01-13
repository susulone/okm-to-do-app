import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { Button } from "../Button";
import "./EditTaskForm.css";

export const EditTaskForm = ({ task }) => {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(DataContext);
  const [editTaskDescription, setEditTaskDescription] = useState("");
  const [editCategories, setEditCategories] = useState([]);

  const handleEdit = async (id) => {
    const timeEdited = new Date();

    // THIS STILL HAS BUGS TO FIX //
    const formattedCategories = editCategories.length
      ? editCategories.split(/[,\s/]+/g)
      : [];
    const updatedTask = {
      id: task.id,
      position: task.position,
      taskDescription: editTaskDescription,
      categories: formattedCategories,
      timeCreated: task.timeCreated,
      timeEdited: timeEdited,
      isCompleted: task.isCompleted,
      isArchived: task.isArchived,
    };
    try {
      const response = await axios.put(
        `http://localhost:3010/tasks/${id}`,
        updatedTask
      );
      setTasks(
        tasks.map((task) => (task.id === id ? { ...response.data } : task))
      );
      setEditTaskDescription("");
      setEditCategories([]);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (task) {
      setEditTaskDescription(task.taskDescription);
      setEditCategories(task.categories);
    }
  }, [task, setEditTaskDescription, setEditCategories]);

  return (
    <>
      {editTaskDescription && (
        <form className="Modal__Body" onSubmit={(e) => e.preventDefault()}>
          <section className="Modal__Section">
            <label className="Modal__Label" htmlFor="taskDescription">
              Edit task
            </label>
            <textarea
              className="Modal__Textarea"
              id="taskDescription"
              rows="3"
              value={editTaskDescription}
              onChange={(e) => setEditTaskDescription(e.target.value)}
              tabIndex="0"
              required
            ></textarea>
          </section>
          <section className="Modal__Section">
            <label className="Modal__Label" htmlFor="tags">
              Edit tags
            </label>
            <input
              className="Modal__Input"
              type="text"
              id="tags"
              tabIndex="0"
              placeholder='Separate your tags with ","'
              defaultValue={editCategories}
              onChange={(e) => setEditCategories(e.target.value)}
              // required
            />
          </section>
          <section className="Modal__Section">
            <label className="Modal__Label" htmlFor="notification">
              Edit notification
            </label>
            <input
              type="datetime-local"
              className="Modal__Input"
              id="notification"
              tabIndex="0"
              disabled
            />
          </section>
          <section className="Modal__Footer">
            <span className="Button__Left">
              <Link to="/">
                <Button buttonType={"Secondary"} text={"Cancel"} />
              </Link>
            </span>
            <span className="Button__Right">
              <Button
                buttonType={"Primary"}
                text={"Save"}
                type="submit"
                onClick={() => handleEdit(task.id)}
              />
            </span>
          </section>
        </form>
      )}
      {!editTaskDescription && (
        <section className="Error_NotFound">
          <h2>Oops!</h2>
          <p className="Error_NotFound__Message">
            This task seems to be missing...
          </p>
          <Link to="/">
            <Button buttonType={"Primary"} text={"Let's Go Back"} />
          </Link>
        </section>
      )}
    </>
  );
};

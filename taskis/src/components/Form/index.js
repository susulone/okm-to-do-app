import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../../context/DataContext";
import { Button } from "../Button";
import "./Form.css";

export const Form = () => {
  const navigate = useNavigate();
  const { tasks, setTasks, handleCloseModal } = useContext(DataContext);
  const [taskDescription, setTaskDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const formattedCategories = categories.length
      ? categories.split(/[,\s/]+/g)
      : [];
    const timeCreated = new Date();
    const newTask = {
      id: id,
      taskDescription: taskDescription,
      categories: formattedCategories,
      timeCreated: timeCreated,
      timeEdited: null,
      isCompleted: false,
      isArchived: false,
    };
    try {
      const response = await axios.post("http://localhost:3010/tasks", newTask);
      const allTasks = [...tasks, response.data];
      setTasks(allTasks);
      setTaskDescription("");
      setCategories([]);
      handleCloseModal();
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <form className="Modal__Body" onSubmit={handleSubmit}>
      <section className="Modal__Section">
        <label className="Modal__Label" htmlFor="taskDescription">
          Create a new task
        </label>
        <textarea
          className="Modal__Textarea"
          id="taskDescription"
          rows="3"
          placeholder="Your task description..."
          tabIndex="0"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
        ></textarea>
      </section>
      <section className="Modal__Section">
        <label className="Modal__Label" htmlFor="tags">
          Tags
        </label>
        <input
          className="Modal__Input"
          type="text"
          id="tags"
          tabIndex="0"
          placeholder='Separate your tags with ","'
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          // required
        />
      </section>
      <section className="Modal__Section">
        <label className="Modal__Label" htmlFor="notification">
          Notification
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
          <Button
            buttonType={"Secondary"}
            text={"Cancel"}
            onClick={handleCloseModal}
          />
        </span>
        <span className="Button__Right">
          <Button buttonType={"Primary"} text={"Confirm"} type="submit" />
        </span>
      </section>
    </form>
  );
};

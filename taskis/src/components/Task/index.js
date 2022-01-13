import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import axios from "axios";
import { IconContext } from "react-icons";
import { FiCircle, FiCheckCircle, FiEdit3, FiX } from "react-icons/fi";
import { HiOutlineArchive } from "react-icons/hi";
import "./Task.css";

export const Task = ({ task, id, taskDescription, index }) => {
  const { tasks, setTasks } = useContext(DataContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3010/tasks/${id}`);
      const updatedTaskList = tasks.filter((task) => task.id !== id);
      setTasks(updatedTaskList);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <article
      className="Task__Wrapper"
      key={id}
      onDoubleClick={() => setIsVisible(!isVisible)}
    >
      <IconContext.Provider value={{ className: "Task__Icons" }}>
        {task && (
          <>
            <section className="Task__Description">
              <input
                type="checkbox"
                tabIndex="0"
                onChange={() => setIsCompleted(!isCompleted)}
                checked={isCompleted}
              />
              {isCompleted === true ? (
                <span className="Check__Icons">
                  <FiCheckCircle
                    role="checkbox"
                    title="Filled Checkbox"
                    aria-label="Filled Checkbox"
                    tabIndex="0"
                    onClick={() => setIsCompleted(!isCompleted)}
                  />
                </span>
              ) : (
                <span className="Check__Icons">
                  <FiCircle
                    role="checkbox"
                    title="Empty Checkbox"
                    aria-label="Empty Checkbox"
                    tabIndex="0"
                    onClick={() => setIsCompleted(!isCompleted)}
                  />
                </span>
              )}
              <label>{taskDescription}</label>
            </section>
            {isVisible && (
              <section className="Task__Actions">
                <Link to={`/${task.id}`}>
                  <FiEdit3
                    role="button"
                    title="Edit"
                    aria-label="Edit"
                    tabIndex="0"
                  />
                </Link>

                {/* Show only if Task is marked as completed */}
                {isCompleted && (
                  <HiOutlineArchive
                    role="button"
                    title="Archive"
                    aria-label="Archive"
                    tabIndex="0"
                  />
                )}
                <FiX
                  role="button"
                  title="Delete"
                  aria-label="Delete"
                  tabIndex="0"
                  onClick={() => handleDelete(id)}
                />
              </section>
            )}
          </>
        )}
        {!task && <p>Task not found!</p>}
      </IconContext.Provider>
    </article>
  );
};

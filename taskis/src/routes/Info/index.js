import { IconContext } from "react-icons";
import { Accordion } from "../../components/Accordion";
import { FiEdit3, FiPlusCircle } from "react-icons/fi";
import "./Info.css";

export const Info = () => {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <IconContext.Provider value={{ className: "Info__Icons" }}>
      <main className="Info__Wrapper">
        <h1 className="Info__Heading">Welcome to use TASKIS</h1>
        <p className="Info__Version">
          Version 1.0.0 <br />
          &#169; {currentYear} Suvi Sulonen
        </p>
        <div className="Info__Accordion">
          <Accordion id={0} question="What is Taskis?">
            <p>Taskis is an school project that was made using React.</p>
            <h5>License & copyright</h5>
            <p>
              All the icons used in this app come from{" "}
              <a
                href="https://feathericons.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroicons
              </a>{" "}
              and{" "}
              <a
                href="https://feathericons.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Feather icons
              </a>{" "}
              both are licensed under the{" "}
              <a
                href="https://mit-license.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
              . The Taskis logo was made by the author of the program.
            </p>
          </Accordion>
          <Accordion id={1} question="How to add new tasks?">
            <p>
              You can create a new task by clicking the
              <span classNme="Info__Insert">
                <FiPlusCircle /> Add Task
              </span>
              button on the sidebar. This button will open an popup where you
              can write your task description, give your taks categories, and
              set a notification for the task. When you are done simply click
              the Confirm button and you have created your first task!
            </p>
          </Accordion>
          <Accordion id={2} question="How to edit tasks?">
            <p>
              Each task has a hidden section of task actions that can be
              revealed by double clicking the task description.
            </p>
            <p>
              You can edit your task by clicking the
              <span classNme="Info__Insert">
                <FiEdit3 title="Edit" /> Edit
              </span>
              button which will open the same popup that you saw when creating
              the task. Here you can access and change all the parameters
              related to the task.
            </p>
          </Accordion>
          <Accordion id={3} question="How to categorize your tasks?">
            <p>
              You can add categories to your task while you are creating a new
              task, or you can add new categories to any already existing task
              with the
              <span classNme="Info__Insert">
                <FiEdit3 title="Edit" /> Edit
              </span>
              button.
            </p>
          </Accordion>
        </div>
      </main>
    </IconContext.Provider>
  );
};

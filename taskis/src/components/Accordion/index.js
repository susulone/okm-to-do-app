import "./Accordion.css";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

export const Accordion = ({ id, question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Accordion__Item" key={id}>
      <dt className="Accordion__Header">
        <button
          className={
            isOpen ? "Accordion__Button_Opened" : "Accordion__Button_Closed"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <IconContext.Provider value={{ className: "Accordion__Icons" }}>
            <span className="Accordion__Button__Icon">
              {isOpen ? <FiMinus title="Close" /> : <FiPlus title="Open" />}
            </span>
          </IconContext.Provider>
        </button>
      </dt>
      {isOpen && <dd className="Accordion__Panel">{children}</dd>}
    </div>
  );
};

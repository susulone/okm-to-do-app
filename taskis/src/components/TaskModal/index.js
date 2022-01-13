import { createPortal } from "react-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Form } from "../Form";
import "./TaskModal.css";

export const TaskModal = () => {
  const { isModalOpen } = useContext(DataContext);

  if (!isModalOpen) {
    return null;
  }
  return createPortal(
    <>
      <div className="Overlay">
        <div className="Modal">
          <Form />
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

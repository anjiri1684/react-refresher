/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./Backdrop";

function Todo({ title }) {
  const [modalIsOpen, setModalIsOpen] = useState();

  function deleteHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
          {modalIsOpen && <Modal onClick={closeModal} />}
          {modalIsOpen && <BackDrop onClick={closeModal} />}
        </div>
      </div>
    </>
  );
}

export default Todo;

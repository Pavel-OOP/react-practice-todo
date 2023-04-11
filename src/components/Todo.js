import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log("deleteHandler");
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    console.log("deleteModalRemover");
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal cancel={closeModalHandler} confirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop cancelIt={closeModalHandler} />}
    </div>
  );
}

export default Todo;

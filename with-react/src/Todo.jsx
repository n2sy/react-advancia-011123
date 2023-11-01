import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);
  function deleteHandler() {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  }

  console.log(props);
  return (
    <>
      <div className="card">
        <h2>{props.titre}</h2>
        <div className="actions">
          <button onClick={deleteHandler} className="btn">
            Delete
          </button>
        </div>
      </div>
      {isOpen && <Modal></Modal>}
      {isOpen ? <Backdrop></Backdrop> : null}
    </>
  );
}

export default Todo;

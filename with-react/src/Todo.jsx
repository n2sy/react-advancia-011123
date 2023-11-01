import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);
  function changeState() {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  }

  function confirmHandler() {
    changeState();
    console.log("Confirm Clicked !");
  }
  function cancelHandler() {
    changeState();
    console.log("Cancel Clicked !");
  }

  console.log(props);
  return (
    <>
      <div className="card">
        <h2>{props.titre}</h2>
        <div className="actions">
          <button onClick={changeState} className="btn">
            Delete
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal onConfirm={confirmHandler} onCancel={cancelHandler}></Modal>
      )}
      {isOpen ? <Backdrop onYassine={changeState}></Backdrop> : null}
    </>
  );
}

export default Todo;

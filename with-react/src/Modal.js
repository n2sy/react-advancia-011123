import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button onClick={props.onCancel} className="btn btn-alt">
        cancel
      </button>
      <button onClick={props.onConfirm} className="btn">
        Confirm
      </button>
    </div>
  );
}

export default Modal;

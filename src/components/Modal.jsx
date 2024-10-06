import React from "react";

const Modal = ({ value, setOpen }) => {
  console.log(value);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal">
      <div className="header">
        <h3>Add Event</h3>
        <button onClick={handleClose}>Close</button>
      </div>

      <form>
        <label htmlFor="name">Event name</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Modal;

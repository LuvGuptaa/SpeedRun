import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calendar from "react-calendar";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} onClickDay={handleClick} />
      <div className="modal-container">{open && <Modal value={value} setOpen={setOpen} />}</div>
    </div>
  );
}

export default App;

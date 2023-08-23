import React from "react";
import ReactDOM from "react-dom";
import './modalBackground.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className=" modalBackground flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 text-white ">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }
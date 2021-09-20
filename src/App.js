import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideBar() {
    setIsOpen((isOpen) => !isOpen);
  }

  function toggleSideBarClassName() {
    return isOpen ? "sidebar-visible " : "";
  }

  return (
    <div className="app">
      <button className="openButton" onClick={() => toggleSideBar()}>
        Menu
      </button>
      <div className={toggleSideBarClassName() + "sidebar"}>
        <button className="closeButton" onClick={() => toggleSideBar()}>
          +
        </button>
        <nav className="navigation">
          <ul>
            <li className="item">
              <a href="/">Home</a>
            </li>
            <li className="item">
              <a href="/">About</a>
            </li>
            <li className="item">
              <a href="/">Work</a>
            </li>
            <li className="item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

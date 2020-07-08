import React from "react";

const Sidebar = () => {
  const clickMenu = (e) => {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Shortcuts
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Overview
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Events
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Profile
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Status
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <button
          className="btn btn-primary"
          id="menu-toggle"
          onClick={clickMenu}
        >
          Toggle Menu
        </button>

      </div>
    </div>
  );
};

export default Sidebar;

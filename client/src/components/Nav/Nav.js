import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top " style={{ backgroundColor: 'rgb(62, 74, 102)' }}>
    <div className="container-fluid">
      <div className="navbar-header" >
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand" >
          It's the Blue One
        </a>
        <h6>A simple medicine and appointment tracker.</h6>
      </div>
    </div>
  </nav>
);

export default Nav;

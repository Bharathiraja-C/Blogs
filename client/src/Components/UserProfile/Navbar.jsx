import React from "react";
//Navbar
function Navbar() {
  const navstyle = {
    marginLeft: "5px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark  sticky-top border-bottom border-black"
      style={{ backgroundColor: "#171721" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#" style={navstyle}>
          Tech Tales
        </a>
        <div className="ml-auto mr-4px d-flex align-items-center">
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link flex-grow-0 flex-shrink-0 mr-2" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item flex-grow-0 flex-shrink-0 ml-2">
              <button className="btn btn-dark rounded-pill mr-2">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

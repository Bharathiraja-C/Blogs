// import React, { useEffect, useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import "./Navbar.css";
// function Navbar() {
//   const navstyle = {
//     marginLeft: "5px",
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "white",
//   };

//   // state variables to store id and name
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");

//   useEffect(() => {
//     // Retrieve data from localStorage
//     const storedId = localStorage.getItem("id");
//     const storedName = localStorage.getItem("name");

//     // Update state variables with retrieved data
//     console.log(storedId);
//     if (storedId) {
//       setId(storedId);
//     }
//     if (storedName) {
//       setName(storedName);
//     }
//   }, []); // Empty dependency array means this effect runs only once after the component mounts

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-dark  sticky-top border-bottom border-black"
//       style={{ backgroundColor: "#171721" }}
//     >
//       <div className="container">
//         <a className="navbar-brand" href="/" style={navstyle}>
//           Tech Tales
//         </a>
//         <div className="ml-auto mr-4px d-flex align-items-center">
//           <ul className="navbar-nav flex-row">
//             {id ? (
//               <ul className="navbar-nav flex-row ml-auto">
//                 <li className="nav-item text-white mr-4 d-flex gap-2 align-items-center">
//                   <Link style={{color: "white", textDecoration: "none"}} to={`/User/${localStorage.getItem('id')}`} >
//                     <FaRegUserCircle style={{ fontSize: "2rem", marginRight: "5px" }} />
//                     <span className="ml-2">{name}</span>
//                   </Link>
//                 </li>
//               </ul>
//             ) : (
//               <ul className="navbar-nav flex-row">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link flex-grow-0 flex-shrink-0 mr-2"
//                     href="/Auth"
//                   >
//                     Sign In
//                   </a>
//                 </li>
//                 <li className="nav-item flex-grow-0 flex-shrink-0 ml-2">
//                   <button className="btn btn-dark rounded-pill mr-2">
//                     <a
//                       href="\blog\id:"
//                       style={{ textDecoration: "none", color: "white" }}
//                     >
//                       Get Started
//                     </a>
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navstyle = {
    marginLeft: "5px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  };

  // state variables to store id and name
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Retrieve data from localStorage
    const storedId = localStorage.getItem("id");
    const storedName = localStorage.getItem("name");

    // Update state variables with retrieved data
    if (storedId) {
      setId(storedId);
    }
    if (storedName) {
      setName(storedName);
    }
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark  sticky-top border-bottom border-black"
      style={{ backgroundColor: "#171721" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/" style={navstyle}>
          Tech Tales
        </a>

        {/* Search bar and button */}
        <form className="form-inline d-flex  mx-auto">
          <input
            className="form-control ml-2 mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
           
          />&nbsp;&nbsp;
          <button  className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>

        <div className="ml-auto mr-4px d-flex align-items-center">
          <ul className="navbar-nav flex-row">
            {id ? (
              <ul className="navbar-nav flex-row ml-auto">
                <li className="nav-item text-white mr-4 d-flex gap-2 align-items-center">
                  <Link style={{color: "white", textDecoration: "none"}} to={`/User/${localStorage.getItem('id')}`} >
                    <FaRegUserCircle style={{ fontSize: "2rem", marginRight: "5px" }} />
                    <span className="ml-2">{name}</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link flex-grow-0 flex-shrink-0 mr-2"
                    href="/Auth"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item flex-grow-0 flex-shrink-0 ml-2">
                  <button className="btn btn-dark rounded-pill mr-2">
                    <a
                      href="\blog\id:"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Get Started
                    </a>
                  </button>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


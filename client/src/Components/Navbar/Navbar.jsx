import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

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
  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  let storedId = ''
  let storedName = ''

  useEffect(() => {
    // Retrieve data from localStorage
    storedId = localStorage.getItem("id");
    storedName = localStorage.getItem("name");

    // Update state variables with retrieved data
    if (storedId) {
      setId(storedId);
    }
    if (storedName) {
      setName(storedName);
    }
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  useEffect(() => {
    storedId = localStorage.getItem('id')
    storedName = localStorage.getItem("name");
    console.log('value changed')
  },[localStorage])

  const searchBlog = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`http://localhost:5000/searchBlog/${search}`)
      if (res.status === 200) {
        navigate(`/blog/${res.data.bestMatchId}`)
        setSearch('')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
        <form id="form" className="form-inline  d-flex  mx-auto">
          <input
            className="form-control ml-2 mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />&nbsp;&nbsp;
          <button onClick={(e) => searchBlog(e)} className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>

        <div className="ml-auto mr-4px d-flex align-items-center">
          <ul className="navbar-nav flex-row">
            {id ? (
              <ul className="navbar-nav flex-row ml-auto">
                <li className="nav-item text-white mr-4 d-flex align-items-center">
                  <Link style={{color: "white", textDecoration: "none"}} to={`/User/${localStorage.getItem('id')}`} >
                    <FaRegUserCircle style={{ fontSize: "2rem", marginRight: "10px" }} />
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
                  <button id="btn" className="btn btn-dark rounded-pill mr-2">
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


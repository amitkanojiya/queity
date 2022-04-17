import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../component/style.css";
function Navbar() {
  const [navstyle, setnavstyle] = useState({ backgroundColor: "#0b163f" });

  const changenavcolor = () => {
    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition);

    // if (scrollPosition <= 80) {
    //   setnavstyle({ backgroundColor: "#0b163f" });
    // } else {
    //   setnavstyle({ backgroundColor: "#fff" });
    // }
  };
  window.addEventListener("scroll", changenavcolor);
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="container">
            <nav
              className="navbar navbar-expand-md  navbar-dark fixed-top"
              style={navstyle}
            >
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/11/logo-white.svg"></img>
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      {/* <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Link 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Link 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Link 3
                        </a>
                      </div> */}
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Link 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Link 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Link 3
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        Shop
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Shop
                        </a>
                        <a className="dropdown-item" href="#">
                          Product Single
                        </a>
                        <a className="dropdown-item" href="#">
                          Wishlist
                        </a>
                        <a className="dropdown-item" href="#">
                          Cart
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Contact
                      </a>
                    </li> */}
                    {/* <li className="nav-item pl-2">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-primary btn-lg"
                      >
                        Get Started
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

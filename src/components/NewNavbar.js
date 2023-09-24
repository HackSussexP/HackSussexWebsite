import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from "./../assets/logo-gradient.png";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false)

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  const closeNavbar = () => {
    setNavbar(false)
  }

  return(
    <>   
      <nav class="navbar navbar-expand-xl navbar-dark p-0 navbar-blur">
        <div className="container-fluid py-2 px-5">
          <Link class="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={logo} alt="logo" width="100" height="50" />
          </Link>
          <button class={`navbar-toggler btn rounded ${navbar ? 'collapsed' : ''}`} type="button" onClick={toggleNavbar}>
            <span class="navbar-toggler-icon"></span>
          </button>   
          <div className={`collapse navbar-collapse ${navbar ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link px-5" aria-current="page" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle px-5" to="#" id="navbarEventDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarEventDropdown">
                  <li>
                    <Link className="dropdown-item" to="/events/hackathon" onClick={closeNavbar}>
                      Hackathon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/coderscup" onClick={closeNavbar}>
                      Coders Cup
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/events/codesocials" onClick={closeNavbar}>
                      Code Socials
                    </Link>
                  </li> */}
                  <li>
                    <Link className="dropdown-item" to="/events/pwnsussex" onClick={closeNavbar}>
                      PwnSussex
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/gamejam" onClick={closeNavbar}>
                      Game Jam
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/leetcoding" onClick={closeNavbar}>
                      Leetcoding
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link className="dropdown-item" to="/events" onClick={closeNavbar}>
                      All Events
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="/gallery" onClick={closeNavbar}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="/faq" onClick={closeNavbar}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;
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

          {/* MLH Flag */}
          {/* <a 
            id="mlh-trust-badge" 
            className="d-none d-lg-block"
            style={{display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '100px', top: '0', width: '10%', zIndex: 10000}} 
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg" 
              alt="Major League Hacking 2024 Hackathon Season" 
              style={{width: '100%'}} 
            />
          </a> */}
          {/* End MLH Flag */}

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
                  <li>
                    <Link className="dropdown-item" to="/events/robotics" onClick={closeNavbar}>
                      Robotics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/competitiveProgramming" onClick={closeNavbar}>
                      Competitive Programming
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
              {/*<li className="nav-item">
                <Link className="nav-link px-5" to="/gallery" onClick={closeNavbar}>
                  Gallery
                </Link>
              </li>*/}
              <li className="nav-item">
                <Link className="nav-link px-5" to="/faq" onClick={closeNavbar}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="https://hacksussex.square.site/" target="_blank" onClick={closeNavbar}>
                  Merch Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="https://www.instagram.com/minesocsussex/" target="_blank" onClick={closeNavbar}>
                  MineSoc
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
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../assets/logo-gradient.png';

const Navbar = () => {
  return(
    <>
      <nav class="navbar navbar-expand-md text-center">
        <div class="container-fluid px-5">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="logo" width="100" height="50" />
          </Link>
          <button class="navbar-toggler btn-blue rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav me-auto gap-3">
              <li class="nav-item p-3">
                <Link class="btn-blue rounded nav-link px-5" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item p-3">
                <Link class="btn-blue rounded nav-link px-5" to="/about">About</Link>
              </li>
              <li class="nav-item dropdown p-3">
                <Link class="btn-blue rounded nav-link dropdown-toggle px-5" to="#" id="navbarEventDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </Link>
                <ul class="dropdown-menu p-3" aria-labelledby="navbarEventDropdown">
                  <li>
                    <Link class="dropdown-item" to="/events/hackathon">Hackathon</Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/events/coderscup">Coders Cup</Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/events/codesocials">Code Socials</Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/events/capturetheflag">Capture the Flag</Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/events/gamejam">Game Jam</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item p-3">
                <Link class="btn-blue rounded nav-link px-5" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li class="nav-item p-3">
                <Link class="btn-blue rounded nav-link px-5" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;

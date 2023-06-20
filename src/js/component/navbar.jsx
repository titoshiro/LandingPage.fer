import React from "react";

const Navbar = ({ empresa, home, about, services, contact }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black text-white   ">
        <div className="container ">
          <a className="navbar-brand text-white " href="#">
            {empresa}
          </a>
          <button
            className="navbar-toggler bg-white  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav "
            aria-expanded="false"
            aria-label="Toggle navigation "
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse text-white  justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item  ">
                <a
                  className="nav-link active text-white  "
                  aria-current="page"
                  href="#"
                >
                  {home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {services}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ">{contact}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black text-white ">
        <div className="container-fluid ">
          <a className="navbar-brand text-white" href="#">
            {props.empresa}
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
          <div className="collapse navbar-collapse text-white " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item  ">
                <a
                  className="nav-link active text-white "
                  aria-current="page"
                  href="#"
                >
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {props.services}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ">{props.contact}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

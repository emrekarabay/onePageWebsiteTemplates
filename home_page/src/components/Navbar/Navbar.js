import React from "react";
import "./Navbar.css";
import ButtonHomePage from "../Buttons/ButtonHomePage/ButtonHomePage";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              src="https://gameplus.com.tr/static/media/logo.6d064b08.png"
              alt=""
            />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <AiOutlineMenu />
            </span>
          </button>
          <div
            className="collapse navbar-collapse mt-sm-5 mt-lg-0 text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-sm-5 mb-lg-0 text-md-center ">
              <li className="nav-item">
                <Link
                  className="nav-link text-center text-lg-start fw-semibold"
                  to="/games"
                >
                  Games
                </Link>
              </li>
              <hr className="m-1" />
              <li className="nav-item">
                <a
                  className="nav-link text-center text-lg-start  fw-semibold"
                  href="#"
                >
                  Membership
                </a>
              </li>
              <hr className="m-1" />
              <li className="nav-item">
                <a
                  className="nav-link text-center text-lg-start fw-semibold"
                  href="#"
                >
                  Download
                </a>
              </li>
              <hr className="m-1" />
              <li className="nav-item">
                <a
                  className="nav-link text-center text-lg-start fw-semibold"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <hr className="m-1" />
              <li className="nav-item">
                <a
                  className="nav-link text-center text-lg-start fw-semibold"
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
            <form
              className="d-flex flex-md-column flex-lg-row justify-content-center text-lg-start"
              role="search"
            >
              <Link to="/register">
                <ButtonHomePage
                  buttonTitle="LET'S PLAY"
                  buttonType="greenButton"
                  buttonWitdh="width-185"
                />
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

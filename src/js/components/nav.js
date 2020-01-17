import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, IconButton, MenuItem } from "react-mdl";
import Ps from "../../images/PS.svg";

class Nav extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <div className="logo-container">
            <div className="logo">
              <Link className="logo-link" to="./home">
                <h1>PS</h1>
              </Link>
            </div>
          </div>
          <nav>
            <div className="nav-links">
              <Link className="nav-link" id="non_mobile" to="./home">
                Home
              </Link>
              <Link className="nav-link" id="non_mobile" to="./employees">
                Employees
              </Link>
              <Link className="nav-link" id="non_mobile" to="./room">
                Rooms
              </Link>
              <Link className="nav-link" id="non_mobile" to="./scenarios">
                Scenarios
              </Link>

              <Link className="nav-link" id="non_mobile" to="./directory">
                Directory
              </Link>
              <IconButton
                className="staff-links"
                name="Links"
                id="staff-links"
              ></IconButton>
              <Menu className="mdl-menu--bottom-right" target="staff-links">
                <div className="staff-links"></div>
                <MenuItem>
                  <a
                    className="staff-link"
                    href="https://minermail.mst.edu/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fminermail.mst.edu%2fowa"
                  >
                    MinerMail
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vccmedia.mst.edu"
                  >
                    MediaSpace
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mst.hosted.panopto.com"
                  >
                    Panopto
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://help.mst.edu"
                  >
                    Cherwell
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.shiftboard.com/log-in/"
                  >
                    Shiftboard
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://myhr.umsystem.edu"
                  >
                    My HR
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="staff-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/0AE5X1F4u0p-yUk9PVA"
                  >
                    All Procedures
                  </a>
                </MenuItem>
              </Menu>
              <IconButton
                className="ham-links"
                name=". . ."
                id="menu"
              ></IconButton>
              <Menu className="mdl-menu--bottom-right" target="menu">
                <MenuItem>
                  <Link className="ham-link" to="./home">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="ham-link" to="./employees">
                    Employees
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="ham-link" to="./room">
                    Rooms
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="staff-link" to="./directory">
                    Directory
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </nav>
        </header>
        <div className="header-span">
          <span></span>
        </div>
      </>
    );
  }
}

export default Nav;

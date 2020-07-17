import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.scss";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__spacer" />
      <div className="toolbar__navigation--items">
        <ul>
          <li>
            <a href="/">
              <span>
                <strong>01: </strong>
              </span>
              Works
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <strong>02: </strong>
              </span>
              About
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <strong>03: </strong>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;

import React from "react";

import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  // const drawerClass = () => (drawerClasses = "side-drawer");

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};
export default sideDrawer;

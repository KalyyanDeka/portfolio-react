import React, { useState } from "react";
import "./App.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./UI/Backdrop";

const App = () => {
  const [sideDrawerOpen, onSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    onSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickedHandler = () => {
    onSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropClickedHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "56px" }}>
        <p>THIS IS THE PAGE CONTENT</p>
      </main>
    </div>
  );
};

export default App;

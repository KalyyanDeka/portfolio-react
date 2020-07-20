import React, { useState } from "react";
import "./App.scss";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./UI/Backdrop";

import Header from "./components/Header/Header";

import Works from "./components/Works/Works";

import About from "./components/About/About";

import Footer from "./components/Footer/Footer";

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
        <Header />
        <Works />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default App;

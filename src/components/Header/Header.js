import React from "react";
import "./Header.scss";

const header = () => {
  return (
    <div className="header">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-start">Hi, my name is . . .</span>
          <span className="heading-primary-main">Kalyyan Deka.</span>
          <span className="heading-primary-sub">Full Stack Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default header;

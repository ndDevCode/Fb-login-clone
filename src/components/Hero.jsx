import React from "react";
import FBName from "../assets/fbimg.svg";

function Hero() {
  return (
    <div className="container m-auto">
      <img src={FBName} alt="facebook name" height={100} />
      <p className="ms-4 fs-3">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
}

export default Hero;

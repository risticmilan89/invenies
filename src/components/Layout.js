import React from "react";

import Main from "./content/Main";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";

const Content = () => {
  return (
    <div className="flex layout">
      <div className="logo-wrapper">
        <Logo className="logo" />
        <h1>
          <span>C</span>alories <span>C</span>alculator
        </h1>
        <div className="scroll-down">
          <ArrowDown /> <p>scroll down</p> <ArrowDown />
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Content;

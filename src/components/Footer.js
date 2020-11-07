import React from "react";

import { ReactComponent as Name } from "../assets/name.svg";
import { ReactComponent as Fb } from "../assets/fb.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="flex">
          <Name className="brand-name" />
        </div>
        <a
          className="button"
          href="https://www.facebook.com/inveniespt"
          target="_blank"
          rel="noreferrer"
        >
          <Fb />
          <p>Join us Now!</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

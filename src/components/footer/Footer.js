import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by 
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{greeting.title2} </a>
        </p>
      </Fade>
    </div>
  );
}

import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <span>
      <p className="title">{props.children}</p>
    </span>
  );
}

export default Title;

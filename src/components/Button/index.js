import React from "react";
import { NavLink } from "react-router-dom";

function Button({ ...props }) {
  return (
    <>
      {props.type === "button" && (
        <button className={`btn ${props.style}`} onClick={props.fn}>
          {props.name}
        </button>
      )}

      {props.type === "link" && (
        <NavLink to={props.path} className={`btn ${props.style}`}>
          {props.name}
        </NavLink>
      )}
    </>
  );
}

export default Button;

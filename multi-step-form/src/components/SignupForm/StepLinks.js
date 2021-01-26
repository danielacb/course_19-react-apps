/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function StepLinks() {
  const { profile, social } = useSignupForm();

  const isProfileEmpty = isEmpty(profile);
  const isSocialEmpty = isEmpty(social);

  return (
    <div className="step-links">
      <NavLink exact to="/">
        {isProfileEmpty ? "🤍" : "💚"} Profile <span />
      </NavLink>
      {isProfileEmpty ? (
        <a>
          {isSocialEmpty ? "🤍" : "💚"} Social <span />{" "}
        </a>
      ) : (
        <NavLink to="/social">
          {isSocialEmpty ? "🤍" : "💚"} Social <span />
        </NavLink>
      )}
      {isProfileEmpty || isSocialEmpty ? (
        <a style={{ float: "right" }}>
          Review <span />
        </a>
      ) : (
        <NavLink to="/review" style={{ float: "right" }}>
          Review <span />
        </NavLink>
      )}
    </div>
  );
}

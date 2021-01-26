import React from "react";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

export default function Review() {
  const { profile, social } = useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { profile: profile, social: social };
    console.log(data);
    alert("Submitting your data!");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review your information!</h2>
        <p>
          <strong>Name: </strong>
          {profile.name}
        </p>
        <p>
          <strong>E-mail: </strong>
          {profile.email}
        </p>
        <p>
          <strong>Twitter: </strong>
          {social.twitter}
        </p>
        <p>
          <strong>Facebook: </strong>
          {social.facebook}
        </p>
        <input type="submit" value="Submit All Info" />
      </form>
    </Animator>
  );
}

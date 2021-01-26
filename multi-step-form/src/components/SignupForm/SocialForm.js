import React from "react";
import Animator from "./Animator";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

export default function SocialForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  function onSubmit(data) {
    setSocial(data);
    history.push("/review");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>How can we find you on the internet?</h2>

        <input
          type="text"
          name="twitter"
          id="twitter"
          placeholder="What is your Twitter"
          defaultValue={social.twitter}
          ref={register({ required: true })}
        />
        <p>{errors.twitter && "Twitter is required"}</p>
        <input
          type="text"
          name="facebook"
          id="facebook"
          placeholder="What is your Facebook"
          defaultValue={social.facebook}
          ref={register({ required: true })}
        />
        <p>{errors.facebook && "Facebook is required"}</p>
        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
}

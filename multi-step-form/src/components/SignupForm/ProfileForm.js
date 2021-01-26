import React from "react";
import Animator from "./Animator";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

export default function ProfileForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { profile, setProfile } = useSignupForm();

  function onSubmit(data) {
    setProfile(data);
    history.push("/social");
  }

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us about yourself!</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What is your name?"
          defaultValue={profile.name}
          ref={register({ required: true })}
        />
        <p>{errors.name && "Your name is required"}</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="What is your e-mail?"
          defaultValue={profile.email}
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <p>{errors.email && "A valid e-mail is required"}</p>
        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
}

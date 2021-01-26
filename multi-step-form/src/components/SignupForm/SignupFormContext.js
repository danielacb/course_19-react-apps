import React, { createContext, useState, useContext } from "react";

const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});

  return (
    <SignupFormContext.Provider
      value={{ profile, setProfile, social, setSocial }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}

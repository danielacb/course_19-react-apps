import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import Review from "./Review";
import StepLinks from "./StepLinks";
import { SignupFormProvider } from "./SignupFormContext";

export default function SignupForm() {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className="signup-form">
        <StepLinks />
        <AnimatePresence>
          <Switch location={location} key={location.pahtname}>
            <Route path="/" exact component={ProfileForm} />
            <Route path="/social" component={SocialForm} />
            <Route path="/review" component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}

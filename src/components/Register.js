import React from "react";
import NameField from "./InputFields/NameField";
import EmailField from "./InputFields/EmailField";
import InterestField from "./InputFields/InterestField"
import Success from "./Success";

import Button from "@material-ui/core/Button";
import UseStyles from './Style'

export default function Register(props) {
  const classes = UseStyles();
  return (
    <div>
      {props.isRegisterPage ? (
        <div className={(classes.root, classes.registerRoot)}>
          <NameField isValidName={props.isValidInput.name} updateInputValue={props.updateInputValue} />
          <EmailField isValidEmail={props.isValidInput.email} updateInputValue={props.updateInputValue} />
          <InterestField
          isValidInterests={props.isValidInput.interests}
            autoSuggestWords={props.autoSuggestWords}
            updateAutoSuggestWords={props.updateAutoSuggestWords}
            updateInterest={props.updateInterest}
            interests={props.interests}
          />

          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={() => props.handleRegister()}
          >
            Register
          </Button>
        </div>
      ) : <Success returnToHome={props.returnToHome} />}
    </div>
  );
}

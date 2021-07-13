import React from "react";

import TextField from "@material-ui/core/TextField";
import UseStyles from '../Style'

 const EmailField = (props) => {
  const classes = UseStyles();
  return (
    <TextField
      id="Email"
      required
      error={props.isValidEmail?false:true}
      helperText={props.isValidEmail?"": "Invalid email"}
      onChange={(e) => props.updateInputValue("email", e.target.value)}
      label="Email"
      type="text"
      className={classes.textField}
      placeholder="xyz@email.com"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
};

export default EmailField;
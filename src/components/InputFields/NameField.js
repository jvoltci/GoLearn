import React from "react";

import TextField from "@material-ui/core/TextField";
import UseStyles from '../Style'

const NameField = (props) => {
  const classes = UseStyles();
  return (
    <TextField
      id="Name"
      required
      error={props.isValidName?false:true}
      helperText={props.isValidName?"": "Invalid Name"}
      onChange={(e) => props.updateInputValue("name", e.target.value)}
      label="Name"
      type="text"
      className={classes.textField}
      placeholder="Full Name"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
};

export default NameField;
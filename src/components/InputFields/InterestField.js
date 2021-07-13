import React from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import UseStyles from '../Style'

const InterestField = (props) => {
  const classes = UseStyles();
  return (
    <div className={classes.interestRoot}>
      <Autocomplete
        onChange={(e, inputValue) => props.updateInterest(inputValue)}
        multiple
        clearText="true"
        id="Interests"
        options={props.interests.length < 3 ? props.autoSuggestWords : []}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            required
            error={props.isValidInterests?false:true}
            onChange={(e) => props.updateAutoSuggestWords(e)}
            className={classes.interestField}
            {...params}
            variant="outlined"
            label="Interests"
            placeholder={
              props.interests.length ? "" : "e.g. swimming, painting"
            }
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Max. 3 interest"
          />
        )}
      />
    </div>
  );
};

export default InterestField;

import React from 'react';

import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import UseStyles from './Style'

const Success = (props) => {
    const classes = UseStyles();
    return(
        <div className={classes.successRoot}>
          <Typography style={{ textAlign: "center", padding: "20px" }}>{"Successfully Registered!"}</Typography>
          <Button
            onClick={() => props.returnToHome()}
            variant="outlined"
            color="secondary"
          >
            Register More!
          </Button>
        </div>
    )
}

export default Success;
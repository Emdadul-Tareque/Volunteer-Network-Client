import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: '450px',
    height: '32px',
    marginTop: '10px',
    
    
  },
}));

const Date = () => {
     const classes = useStyles();
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
};

export default Date;
import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    height: "56px",
  },
}));

const AddItem = (props) => {
  const [item, setItem] = useState("");
  const classes = useStyle();
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit(item);
      }}
    >
      <TextField
        id={props.id}
        label={props.label}
        variant="outlined"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        {props.buttonName}
      </Button>
    </form>
  );
};

export default AddItem;

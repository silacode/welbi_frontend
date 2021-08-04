import React from "react";
import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  logo: {
    color: "blue",
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Welbi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

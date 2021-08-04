import React, { useState } from "react";
import { Popover, IconButton, Typography } from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const PopOver = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopOver = (event) => setAnchorEl(event.currentTarget);
  const handleClosePopOver = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpenPopOver}
        onMouseLeave={handleClosePopOver}
      >
        <AddCircleOutlinedIcon />
      </IconButton>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClosePopOver}
        disableRestoreFocus
      >
        <Typography>Add new user to this event</Typography>
      </Popover>
    </div>
  );
};
export default PopOver;

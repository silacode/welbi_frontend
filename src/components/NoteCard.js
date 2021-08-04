import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import NameList from "./NameList";
import PopOver from "./PopOver";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    margin: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const NoteCard = ({ event, eventId, residents, expandTitle }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [residentAttend, setResidentAttend] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    let attendees = [];
    for (const resident of residents) {
      for (const attendee of resident.attendance) {
        if (attendee.programId === eventId) {
          attendees.push({ id: resident.id, name: resident.name });
        }
      }
    }
    setResidentAttend(attendees);
  };

  return (
    <Card>
      <CardHeader action={<PopOver />} subheader="Event" />
      <CardContent>
        <Typography>{event}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{expandTitle}</Typography>
        </CardContent>
        <CardContent>
          <NameList residents={residentAttend} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NoteCard;

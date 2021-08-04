import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import NoteCard from "./NoteCard";
import AddItem from "./AddItem";
import useFetch from "../hooks/useFetch";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  box: {
    margin: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

const App = () => {
  const classes = useStyle();
  const [events, onFetchEvents] = useFetch("http://localhost:4000/events");
  const [residents, onFetchResidents] = useFetch(
    "http://localhost:4000/residents"
  );

  const handleResidentSubmit = (item) => {
    console.log(item);
    //validation
    onFetchResidents();
  };
  const handleEventSubmit = async (item) => {
    console.log(item);
    onFetchEvents();
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Box className={classes.box}>
          <AddItem
            id="email"
            label="Email"
            buttonName="Add Resident"
            handleSubmit={handleResidentSubmit}
          />
          <AddItem
            id="event"
            label="Event"
            buttonName="Add Event"
            handleSubmit={handleEventSubmit}
          />
        </Box>
        <Container>
          <Grid container spacing={3}>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={event.id}>
                <NoteCard
                  event={event.name}
                  eventId={event.id}
                  residents={residents}
                  expandTitle="Attendees:"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};
export default App;

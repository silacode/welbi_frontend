import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const NameList = ({ residents }) => {
  return (
    <List>
      {residents.map((resident) => (
        <ListItem key={resident.id}>
          <ListItemText primary={resident.name} />
        </ListItem>
      ))}
    </List>
  );
};
export default NameList;

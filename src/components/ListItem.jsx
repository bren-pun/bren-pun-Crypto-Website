import { Stack, Typography } from "@mui/material";
import React from "react";

const ListItem = ({ listName}) => {
  return (
    <>
      <Stack direction="column">
        <Typography variant="h6">{listName}</Typography>
      </Stack>
    </>
  );
};

export default ListItem;

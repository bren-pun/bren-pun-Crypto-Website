import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import ListData from "./ListData";
import ListItem from "./ListItem";

const List = ({ listName, listData }) => {
  return (
    <Stack direction="row" gap={2}>
      <Box>
        <ListItem listName={listName} />
      </Box>
      <Box>
        <ListData listData={listData} />
      </Box>
    </Stack>
  );
};

export default List;

import { Stack, Typography } from "@mui/material";
import React from "react";

const ListData = ({ listData }) => {
  return (
    <Stack direction="column">
      <Typography variant="h6">{listData}</Typography>
    </Stack>
  );
};

export default ListData;

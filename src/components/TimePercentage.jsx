import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const TimePercentage = ({ timeName, timeData }) => {
  return (
    <Stack
      direction="column"
      textAlign="center"
      divider={
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "#d1d4dc" }}
        />
      }
    >
      <Typography>{timeName}</Typography>
      <Typography
        sx={{
          color: timeData < 0 ? "#f23645" : "#08977f",
        }}
      >
        {timeData?.toFixed(2)}%
      </Typography>
    </Stack>
  );
};

export default TimePercentage;

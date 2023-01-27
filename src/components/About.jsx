import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../utils/tyler-lastovich-hM08wZJBlK4-unsplash.jpg";
const About = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundrepeat: "no-repeat",
      backgroundPosition: "center",
    },
  };

  return (
    <Paper style={styles.paperContainer} sx={{ minHeight: "100vh" }}>
      <Stack direction="column">
        <Typography
          color="white"
          variant="h6"
          sx={{ wordBreak: "break-word", p: "30px", mt: 6 }}
        >
          Built using React, Coingecko API, and MUI to provide users with
          up-to-date information on the cryptocurrency market. It provides a
          comprehensive overview of the latest prices, charts, and trends in the
          crypto market, allowing users to stay informed and make savvy trading
          decisions. The website is easy to use and provides real-time updates,
          making it a perfect resource for those interested in cryptocurrency
          trading.
        </Typography>
        <Box color="white" textAlign="center">
          <Typography variant="h2" sx={{ pb: "10px" }}>
            Contact Me:
          </Typography>
          <Typography variant="h4" sx={{ p: "30px", pb: "10px" }}>
            Bren Punzalan
          </Typography>
          <Typography variant="h6" sx={{ pb: "10px", color: "lightwhite" }}>
            (punzalanbren@gmail.com)
          </Typography>

          <IconButton
            href="https://linkedin.com/in/bren-punzalan"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            href="https://github.com/bren-pun"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://twitter.com/BRP_5"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
          >
            <Twitter />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default About;

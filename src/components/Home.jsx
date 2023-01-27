import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, IconButton, Paper } from "@mui/material";
import screencerpic from "../utils/cryptoScreener.png";
import cryptochart from "../utils/cryptochart.png";
import { ArrowRight, GitHub, Info, OpenInNew } from "@mui/icons-material";
import bgImage from "../utils/tyler-lastovich-hM08wZJBlK4-unsplash.jpg";
import { minWidth } from "@mui/system";

const theme = createTheme();

const styles = {
  paperContainer: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={styles.paperContainer}>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 3,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
              fontWeight="bold"
            >
              Top Crypto
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Built using React, Material-UI, and the Coingecko API by Bren
              Punzalan.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container disableGutters>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent="center"
          >
            <Paper sx={{ bgcolor: "#131722", m: "10px" }}>
              <a
                href="/screener"
                style={{ textDecoration: "none", color: "#d1d4dc" }}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h5" fontWeight="bold" sx={{ ml: "5px" }}>
                    Screener
                  </Typography>
                  <IconButton>
                    <OpenInNew sx={{ width: "20px", color: "#d1d4dc" }} />
                  </IconButton>
                </Stack>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{
                    borderColor: "#d1d4dc",
                  }}
                />
                <img
                  src={screencerpic}
                  alt="/"
                  style={{ width: "100%", height: "240px", objectFit: "fill" }}
                />
              </a>

              <Typography variant="body1" sx={{ ml: "5px", color: "#d1d4dc" }}>
                List the top 100 coins using Coingecko API
              </Typography>
            </Paper>

            <Paper sx={{ bgcolor: "#131722", m: "10px" }}>
              <a
                href="/bitcoin"
                style={{ textDecoration: "none", color: "#d1d4dc" }}
              >
                <Stack direction="row" alignItems="center">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ ml: "5px", color: "#d1d4dc" }}
                  >
                    Dynamic Charts
                  </Typography>
                  <IconButton>
                    <OpenInNew sx={{ width: "20px", color: "#d1d4dc" }} />
                  </IconButton>
                </Stack>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{
                    borderColor: "#d1d4dc",
                  }}
                />
                <img
                  src={cryptochart}
                  alt="/"
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "fill",
                  }}
                />
              </a>
              <Stack direction="row">
                <Typography
                  variant="body1"
                  sx={{ ml: "5px", color: "#d1d4dc" }}
                >
                  Crypto Screener
                </Typography>
                <ArrowRight sx={{ color: "#d1d4dc" }} />
                {<Info sx={{ color: "#d1d4dc" }} />}
                <ArrowRight sx={{ color: "#d1d4dc" }} />
                <Typography variant="body1" sx={{ color: "#d1d4dc" }}>
                  Coin Name's Chart
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Container>
        {/* Footer */}
        <Box sx={{ p: 6 }} component="footer">
          <Stack direction="row" justifyContent="center">
            <IconButton
              href="https://github.com/bren-pun/bren-pun-Crypto-Website"
              rel="noopener noreferrer"
              target="_blank"
              size="small"
            >
              <GitHub sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Box>
        {/* End footer */}
      </main>
    </ThemeProvider>
  );
}

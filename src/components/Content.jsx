import { Forum, GitHub, Reddit } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TimePercentage from "./TimePercentage";

const Content = ({ coins }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formatter2 = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  });

  return (
    <Container justifyContent="center">
      <Stack direction="column" gap={2}>
        <Paper
          sx={{ bgcolor: "#131727", color: "#d1d4dc", p: 1, m: 2 }}
          elevation={10}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#d1d4dc" }}
              />
            }
            spacing={2}
            justifyContent="center"
          >
            <TimePercentage
              timeName={"1H"}
              timeData={
                coins?.market_data?.price_change_percentage_1h_in_currency?.usd
              }
            />

            <TimePercentage
              timeName={"7D"}
              timeData={
                coins?.market_data?.price_change_percentage_7d_in_currency?.usd
              }
            />

            <TimePercentage
              timeName={"14D"}
              timeData={
                coins?.market_data?.price_change_percentage_14d_in_currency?.usd
              }
            />

            <TimePercentage
              timeName={"30D"}
              timeData={
                coins?.market_data?.price_change_percentage_30d_in_currency?.usd
              }
            />

            <TimePercentage
              timeName={"60D"}
              timeData={
                coins?.market_data?.price_change_percentage_60d_in_currency?.usd
              }
            />

            <TimePercentage
              timeName={"1Y"}
              timeData={
                coins?.market_data?.price_change_percentage_1y_in_currency?.usd
              }
            />
          </Stack>
        </Paper>

        <TableContainer component={Paper} sx={{ backgroundColor: "#131722" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#d1d4dc" }}>
                  <Typography>Rank</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Name</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Symbol</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Current Price</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Market Cap</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Total Supply</Typography>
                </TableCell>
                <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                  <Typography>Circulating Supply</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell sx={{ color: "#d1d4dc" }}>
                <Typography>{coins?.coingecko_rank}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>{coins?.name}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>{coins?.symbol?.toUpperCase()}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>
                  {formatter?.format(coins?.market_data?.current_price?.usd)}
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>
                  {formatter?.format(coins?.market_data?.market_cap?.usd)}
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>
                  {formatter2?.format(coins?.market_data?.total_supply)}
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ color: "#d1d4dc" }}>
                <Typography>
                  {formatter2?.format(coins?.market_data?.circulating_supply)}
                </Typography>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>

        <Box>
          <Stack direction="row" sx={{ backgroundColor: "#131722" }}>
            <IconButton
              sx={{ display: coins?.links?.subreddit_url ? "block" : "none" }}
            >
              <a
                href={coins?.links?.official_forum_url[0]}
                rel="noopene noreferrer"
                target="_blank"
              >
                <Forum sx={{ color: "#d1d4dc" }} />
              </a>
            </IconButton>
            <IconButton
              sx={{ display: coins?.links?.subreddit_url ? "block" : "none" }}
            >
              <a
                href={coins?.links?.repos_url?.github[0]}
                rel="noopene noreferrer"
                target="_blank"
              >
                <GitHub sx={{ color: "#d1d4dc" }} />
              </a>
            </IconButton>
            <IconButton
              sx={{ display: coins?.links?.subreddit_url ? "block" : "none" }}
            >
              <a
                href={coins?.links?.subreddit_url}
                rel="noopene noreferrer"
                target="_blank"
              >
                <Reddit sx={{ color: "#d1d4dc" }} />
              </a>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Content;

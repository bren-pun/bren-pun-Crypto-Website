import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton, Stack, styled, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function BasicTable({ coin, query }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const StyledTableRow = styled(TableRow)({
    backgroundColor: "#131722",
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell sx={{ color: "white" }}>Coin</TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              $&nbsp;(Current Price)
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              $&nbsp;(Market Cap)
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              24H
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              Info
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {coin
            .filter((value) => {
              return query.toLowerCase() === ""
                ? value
                : value.id.toLowerCase().includes(query);
            })
            .map((coin) => (
              <StyledTableRow
                key={coin.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/${coin.id}`} style={{ textDecoration: "none" }}>
                    <Stack direction="row" alignItems="center">
                      <Avatar src={coin.image} sx={{ px: "5px" }} />
                      <Typography sx={{ px: "7px", color: "#d1d4dc" }}>
                        {coin.name}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "gray" }}>
                        ({coin.symbol.toUpperCase()})
                      </Typography>
                    </Stack>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Typography color="#d1d4dc">
                    {formatter.format(coin.current_price)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="#d1d4dc">
                    {formatter.format(coin.market_cap)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      color:
                        coin.price_change_percentage_24h < 0
                          ? "#f23645"
                          : "#08977f",
                    }}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <IconButton align="center" color="inherit">
                    <Link to={`/${coin.id}`}>
                      <Info sx={{ color: "#d1d4dc" }} />
                    </Link>
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

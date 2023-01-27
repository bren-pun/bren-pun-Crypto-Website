import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Table,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import TradingViewWidget from "./TradingViewWidget";

const CoinPage = () => {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false`
        );
        if (response.data.undefined) {
          console.log("waiting");
        } else {
          console.log(response.data);
          setCoins(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Container
      sx={{
        bgcolor: "#131722",
        color: "#d1d4dc",
      }}
      maxWidth
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
        sx={{ py: "10px" }}
      >
        <Avatar src={coins?.image?.small} />
        <Typography variant="h5">{coins?.name}</Typography>
        <Typography variant="body1" sx={{ color: "lightgrey" }}>
          ({coins?.symbol?.toUpperCase()})
        </Typography>
      </Stack>
      <Paper>
        <Stack
          direction="column"
          justifyContent="flex-start"
          color="#d1d4dc"
          sx={{ bgcolor: "#131722" }}
        >
          <Stack
            direction="row"
            gap={2}
            sx={{ m: "5px" }}
            alignContent="center"
          >
            <Typography>
              {formatter.format(coins?.market_data?.current_price?.usd)} USD
            </Typography>
            <Stack direction="row" gap={"9px"}>
              <Stack direction="row" gap={"4px"}>
                <Typography
                  sx={{
                    color:
                      coins?.market_data
                        ?.price_change_percentage_24h_in_currency?.usd < 0
                        ? "#f23645"
                        : "#08977f",
                  }}
                >
                  {coins?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                    2
                  )}
                  %
                </Typography>
                <Typography variant="body1">(24H)</Typography>
              </Stack>
            </Stack>
          </Stack>
          <TradingViewWidget coinData={coins?.symbol} />
        </Stack>
      </Paper>
      <Container disableGutters maxWidth sx={{ bgcolor: "#131722" }}>
        <Content coins={coins} />
      </Container>
    </Container>
  );
};

export default CoinPage;

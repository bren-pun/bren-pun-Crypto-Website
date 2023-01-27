import { Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicTable from "./BasicTable";
import SearchBar from "./SearchBar";

function Screener() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Container
        maxWidth
        sx={{ pt: 6, backgroundColor: "#131722", minHeight: "100vh" }}
      >
        <Typography variant="h4" color="#d1d4dc" py={3}>
          Crypto Screener
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "#d1d4dc" }}
        />
        <SearchBar setSearchQuery={setSearchQuery} />
        <BasicTable coin={coins} query={searchQuery} />
      </Container>
    </div>
  );
}

export default Screener;

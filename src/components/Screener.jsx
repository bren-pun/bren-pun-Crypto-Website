import { ArrowBack, GitHub } from "@mui/icons-material";
import { Container, Divider, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <IconButton>
          <Link to={-1}>
            <ArrowBack sx={{ color: "white" }} />
          </Link>
        </IconButton>
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

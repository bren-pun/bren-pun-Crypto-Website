import SearchIcon from "@mui/icons-material/Search";
import { Divider, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value.toLowerCase());
          }}
          label=""
          variant="outlined"
          placeholder="Search..."
          size="large"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ my: 2, backgroundColor: "white", borderRadius: "5px" }}
        />
        <Divider fullWidth light />
      </form>
    </div>
  );
};

export default SearchBar;

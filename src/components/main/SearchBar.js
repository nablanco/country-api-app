import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Stack, Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import countryList from "../../utils/data/countryList";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/name/${value}`);

      setValue("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { sm: "480px" },
        ml: { xs: "16px", sm: "3%", md: "80px" },
        mr: { xs: "16px", sm: 0 },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <SearchIcon sx={{ ml: 2 }} />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          options={countryList}
          renderInput={(params) => (
            <TextField {...params} label="Search for a country..." />
          )}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "& .MuiAutocomplete-endAdornment": {
              display: "none",
            },
          }}
        />
      </Stack>
    </Paper>
  );
};

export default SearchBar;

import { Paper, Autocomplete, TextField } from "@mui/material";

import regionList from "../../utils/data/regionList";

const RegionSelection = () => {
  return (
    <Paper
      component="form"
      sx={{
        width: "200px",
        ml: { xs: "16px", sm: "0" },
        mr: { xs: "0", sm: "3%", md: "80px" },
      }}
    >
      <Autocomplete
        options={regionList}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Region" />
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
        }}
      />
    </Paper>
  );
};

export default RegionSelection;

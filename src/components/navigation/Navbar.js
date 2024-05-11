import { Stack, Typography, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Typography>Where in the world?</Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleChange} />}
        label="Dark Mode"
      />
    </Stack>
  );
};

export default Navbar;

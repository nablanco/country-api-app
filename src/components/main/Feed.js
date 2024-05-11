import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

import SearchBar from "./SearchBar";
import RegionSelection from "./RegionSelection";
import Countries from "./Countries";
import fetchFromAPI from "../../utils/api/fetchFromAPI";

const Feed = () => {
  const [countries, setCountries] = useState([]);
  // const { searchTerm } = useParams();

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchFromAPI("all");
      setCountries(data);
    }
    handleFetch();
  }, [setCountries]);

  return (
    <Box>
      <Stack
        justifyContent="space-between"
        gap={4}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <SearchBar />
        <RegionSelection />
      </Stack>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Countries countries={countries} />
      </Box>
    </Box>
  );
};

export default Feed;

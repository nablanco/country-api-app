import { Stack } from "@mui/material";
import PropTypes from "prop-types";

import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-around"
      gap={3}
    >
      {countries.map((country) => {
        return <CountryCard key={country.name.common} country={country} />;
      })}
    </Stack>
  );
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  children: PropTypes.node,
};

export default Countries;

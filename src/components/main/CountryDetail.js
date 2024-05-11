import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import fetchFromAPI from "../../utils/api/fetchFromAPI";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { id } = useParams();
  const countryId = id.replace(/%20/g, " ");

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchFromAPI(`name/${countryId}`);
      setCountry(data);
    }
    handleFetch();
  }, [countryId, setCountry]);

  const handleNativeName = (nativeNameObject) => {
    if (!nativeNameObject) {
      return "Loading...";
    }

    let nameArray = Object.values(nativeNameObject);
    return nameArray[0].common;
  };

  if (!country[0]) {
    return "Loading...";
  }
  console.log(country);
  return (
    <Stack>
      {country[0]?.capital[0]}
      <Stack>
        <Typography>{country[0]?.name?.common}</Typography>
        <Typography>
          Native Name: {handleNativeName(country[0]?.name?.nativeName)}
        </Typography>
        <Typography>
          Population: {country[0]?.population.toLocaleString()}
        </Typography>
        <Typography>Region: {country[0]?.region}</Typography>
        <Typography>Sub Region: {country[0]?.subregion}</Typography>
        <Typography>Capital: {country[0]?.capital[0]}</Typography>
        <Typography>Top Level Domain: {country[0]?.tld[0]}</Typography>
        <Box>
          <Typography component="span">Currencies: </Typography>
          {Object.keys(country[0]?.currencies)?.map(
            (currency, index, array) => {
              if (index < array.length - 1) {
                return (
                  <Typography key={currency} component="span">
                    {country[0]?.currencies[currency].name},{" "}
                  </Typography>
                );
              } else {
                return (
                  <Typography key={currency} component="span">
                    {country[0]?.currencies[currency].name}
                  </Typography>
                );
              }
            }
          )}
        </Box>
        <Box>
          <Typography component="span">Languages: </Typography>
          {Object.keys(country[0]?.languages)?.map((language, index, array) => {
            if (index < array.length - 1) {
              return (
                <Typography key={language} component="span">
                  {country[0]?.languages[language]},{" "}
                </Typography>
              );
            } else {
              return (
                <Typography key={language} component="span">
                  {country[0]?.languages[language]}
                </Typography>
              );
            }
          })}
        </Box>
      </Stack>
    </Stack>
  );
};

export default CountryDetail;

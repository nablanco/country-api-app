import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import fetchFromAPI from "../../utils/api/fetchFromAPI";
import { getCountryByCode } from "../../helper/countryHelper";

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

  console.log(country[0]);
  return (
    <Stack mt={7} gap={4} direction={{ sm: "row" }} sx={{ width: "100%" }}>
      <Box sx={{ width: { xs: "100%", md: "480px" } }}>
        <img
          alt={`flag of ${country[0]?.name?.common}`}
          src={country[0]?.flags?.svg}
          style={{ width: "100%", borderRadius: "7PX" }}
        />
      </Box>
      <Stack id="country-detail-container">
        <Box id="country-name-container">
          <Typography variant="h5">
            <b>{country[0]?.name?.common}</b>
          </Typography>
        </Box>
        <Stack id="country-information-container" gap={{ xs: 3, md: 6 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            mt={2}
            gap={{ xs: 3, md: 6 }}
          >
            <Stack id="country-information-1" gap={1}>
              <Typography>
                <b>Native Name: </b>
                {handleNativeName(country[0]?.name?.nativeName)}
              </Typography>
              <Typography>
                <b>Population: </b>
                {country[0]?.population?.toLocaleString()}
              </Typography>
              <Typography>
                <b>Region: </b>
                {country[0]?.region}
              </Typography>
              <Typography>
                <b>Sub Region: </b>
                {country[0]?.subregion}
              </Typography>
              <Typography>
                <b>Capital: </b>
                {country[0]?.capital[0]}
              </Typography>
            </Stack>
            <Stack id="country-information-2" gap={1}>
              <Typography>
                <b>Top Level Domain: </b>
                {country[0]?.tld[0]}
              </Typography>
              <Box>
                <Typography component="span">
                  <b>Currencies: </b>
                </Typography>
                {Object.keys(country[0]?.currencies)?.map(
                  (currency, index, array) => {
                    if (index < array.length - 1) {
                      return (
                        <Typography key={currency} component="span">
                          {country[0]?.currencies[currency]?.name},{" "}
                        </Typography>
                      );
                    } else {
                      return (
                        <Typography key={currency} component="span">
                          {country[0]?.currencies[currency]?.name}
                        </Typography>
                      );
                    }
                  }
                )}
              </Box>
              <Box>
                <Typography component="span">
                  <b>Languages: </b>
                </Typography>
                {Object.keys(country[0]?.languages)?.map(
                  (language, index, array) => {
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
                  }
                )}
              </Box>
            </Stack>
          </Stack>
          <Stack
            id="country-information-3"
            flexWrap="wrap"
            gap={1}
            direction={{ xs: "column", small: "row" }}
          >
            <Typography>
              <b>Border Countries:</b>
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {country[0]?.borders ? (
                country[0]?.borders?.map((borderCountry) => {
                  return (
                    <Link
                      to={`../name/${getCountryByCode(borderCountry)}`}
                      key={borderCountry}
                    >
                      <Button variant="contained">
                        {getCountryByCode(borderCountry)}
                      </Button>
                    </Link>
                  );
                })
              ) : (
                <Typography>None</Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CountryDetail;

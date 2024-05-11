import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  const countryCapitalCheck = (capital) => {
    if (!capital) {
      return "None";
    }
    return capital[0];
  };

  return (
    <Card sx={{ width: "264px", boxShadow: "none" }}>
      <CardActionArea component={Link} to={`name/${country.name.common}`}>
        <CardMedia
          component="img"
          alt={`flag of ${country?.name?.common}`}
          image={country?.flags?.svg}
          sx={{ width: "264px" }}
        />
        <CardContent>
          <Stack>
            <Typography variant="h6" textDecoration="none">
              {country.name.common}
            </Typography>
            <Typography variant="body 1">
              Population: {country?.population.toLocaleString()}
            </Typography>
            <Typography variant="body 1">Region: {country?.region}</Typography>
            <Typography variant="body 1">
              Capital: {countryCapitalCheck(country.capital)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;

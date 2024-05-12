import { Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import { Stack, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CountryPage = () => {
  return (
    <Stack direction="column" m={4} mb={0}>
      <Link to="/">
        <Button
          variant="contained"
          sx={{ width: { xs: "104px", md: "136px" } }}
        >
          <ArrowBackIcon sx={{ fontSize: "20px", mr: "8px" }} />
          Back
        </Button>
      </Link>
      <CountryDetail />
    </Stack>
  );
};

export default CountryPage;

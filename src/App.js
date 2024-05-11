import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/navigation/Navbar";
import Feed from "./components/main/Feed";
import CountryDetail from "./components/main/CountryDetail";
import SearchFeed from "./components/main/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Nunito" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/name/:id" exact element={<CountryDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/navigation/Navbar";
import Feed from "./components/main/Feed";
import CountryPage from "./components/main/CountryPage";
import SearchFeed from "./components/main/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Nunito" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/name/:id" exact element={<CountryPage />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

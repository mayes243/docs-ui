import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";
import { SwipeDrawer } from "../components";

const AllRoutes = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;

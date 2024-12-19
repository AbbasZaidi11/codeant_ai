import React from "react";
import { Box } from "@mui/material";
import Navigation from "./Navigation";
import Repository from "./Repository";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <Navigation />
      </Box>
      <Box sx={{ flexGrow: 1, marginLeft: 4 }}>
        <Repository />
      </Box>
    </Box>
  );
};

export default Layout;

import React from "react";
import { Box, styled } from "@mui/material";

const DashboardLayout = ({ children }) => {
  const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8vh;
    overflow: hidden;
  `;
  return (
    <Container>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ p: 1 }}>{children}</Box>
      </Box>
    </Container>
  );
};

export default DashboardLayout;

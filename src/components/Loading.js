import React from "react";
import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <CircularProgress size={80} thickness={3} />
    </Box>
  );
}

export default Loading;

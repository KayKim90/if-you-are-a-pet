import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Logo to="/">IF YOU ARE A PET</Logo>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
const Logo = styled(Link)`
  font-weight: 500;
`;
export default Navbar;

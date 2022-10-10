import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
function Home() {
  return (
    <>
      <Stack data-testid="home-test">
        <h3>If you were a pet what would you be?</h3>
        <span>
          If you were a dog, what type of dog would it be? This test determines
          what type of breed you are if you were a dog through a variety of
          questions and answers and accurate analysis. Don't take the results
          too seriously, just have fun. So shall we go find a dog breed that
          looks just like you?
        </span>
        <MainImage src="/main.svg" width={"90%"} />
        <Button
          data-testid="start-button"
          component={Link}
          to="/question"
          color="primary"
          sx={{ margin: "0 auto", width: "250px" }}
          variant="contained"
        >
          Let's Start
        </Button>
      </Stack>
    </>
  );
}
const MainImage = styled.img`
  padding: 2rem 1rem;
  margin: 0 auto;
  border-radius: 125px;
`;
export default Home;

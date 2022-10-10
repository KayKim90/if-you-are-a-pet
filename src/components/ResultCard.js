import React from "react";
import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

function ResultCard(props) {
  const { result } = props;
  return (
    <Paper variant="outlined" sx={{ margin: "2rem 0", padding: 3 }}>
      <Grid container>
        <Grid
          sm={12}
          md={6}
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/dog-walking.png" alt="Dog walk" height="400" />
        </Grid>
        <GridFlex sm={12} md={6} item>
          <CardName>{result?.name}</CardName>
          <CardAvartar src={result?.img} alt="Dog Avatar" width="100px" />
          <p>{result?.subtitle}</p>
          <p>{result?.content}</p>
        </GridFlex>
      </Grid>
    </Paper>
  );
}
const GridFlex = styled(Grid)`
  display: flex;
  flex-direction: column;
`;
const CardName = styled.h3`
  text-align: center;
`;
const CardAvartar = styled.img`
  align-self: center;
`;
export default ResultCard;

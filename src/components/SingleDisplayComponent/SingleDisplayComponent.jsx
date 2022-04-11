import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const StyledBarDiv = styled.div`
  width: 100%;
  /* background-color: #adc2db; */
  background-image: linear-gradient(to right, #adc2db, #ccd6de 66%);
  margin-top: 3em;
  margin-bottom: 3em;
  padding-top: 6em;
  padding-bottom: 6em;
  position: absolute;
  z-index: -1;
`;
export const SingleDisplayComponent = ({ img, children }) => {
  return (
    <div>
      <Grid container>
        <StyledBarDiv />
        <Grid item xs={4}>
          <img
            src={img}
            height="300px"
            width="300px"
            style={{ marginLeft: "15%", borderRadius: "100px" }}
          />
        </Grid>

        <Grid item xs={6} alignSelf="center">
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

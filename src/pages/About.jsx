import React from "react";
import { StyledPgContainer } from "./Products";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import bgVertical from "../imgs/bgVertical.png";

export const About = () => {
  return (
    <StyledPgContainer style={{ marginLeft: "3em", marginRight: "3em" }}>
      <Typography
        style={{ marginTop: "2em", marginBottom: "2em" }}
        variant="h4"
        textAlign="center"
      >
        Our Story
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={10} md={6}>
          <img src={bgVertical} style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            style={{ marginTop: "1em", marginBottom: "2em" }}
            variant="h6"
          >
            Boreal Gateau brings high-end, artisanal mirror galze ice cream
            cakes to Toronto. The founder and owner, Daisy first came up with
            the idea during her own failed search for a quality patisserie style
            ice cream cake.
          </Typography>

          <Typography
            style={{ marginTop: "1em", marginBottom: "2em" }}
            variant="h6"
          >
            With over 10 years of experience in the pastry industry, Daisy's has
            worked at several quality establishments including Patria, Laduree
            and most recently DaanGo Cake Lab. She hopes to use her experience
            and expertise to deliver the best ice cream experience possible.
          </Typography>
        </Grid>
      </Grid>
    </StyledPgContainer>
  );
};

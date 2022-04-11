import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { SingleDisplayComponent } from "../components/SingleDisplayComponent/";
import { Typography } from "@mui/material";

import happyHour from "../imgs/happyHour.jpg";

export const Landing = () => {
  return (
    <>
      <Carousel />
      <div className="mt-4"></div>
      <SingleDisplayComponent img={happyHour}>
        <>
          <Typography variant="h5">Happy Hour, everyday from 3-5pm</Typography>
          <Typography variant="h6" className="mt-1">
            Enjoy one of our signiture mini ice cream cakes with a drink of your
            choice
          </Typography>

          <Typography variant="h6" className="mt-1">
            Only 9.50 + Tax (Add any Crossiant $3)
          </Typography>
        </>
      </SingleDisplayComponent>
      {/* <Paper
          style={{
            width: "100%",
            padding: "2em",
            boxShadow: "5px 10px #888888",
          }}
          variant="outlined"
        >
          <Grid container>
            <Grid item xs={4}>
              <img src={happyHour} height="300px" width="300px" />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1">Happy hour text</Typography>
            </Grid>
          </Grid>
        </Paper> */}
    </>
  );
};

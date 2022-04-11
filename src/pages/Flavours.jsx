import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

export const Flavours = () => {
  return (
    <div>
      <div style={{ marginLeft: "5em", marginRight: "5em" }}>
        <Typography
          style={{ marginTop: "2em", marginBottom: "2em" }}
          variant="h4"
          textAlign="center"
        >
          Past and Present flavours
        </Typography>

        <Typography variant="h5" textAlign="start">
          Price List
        </Typography>

        <Grid container direction="row" className="mt-2">
          <Grid item xs={2}>
            <Typography variant="body1" textAlign="start">
              Kiddie - $4.25
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" textAlign="start">
              Single - $5.50
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" textAlign="start">
              Double - $7.5
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" textAlign="start">
              Triple - $8.75
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" textAlign="start" className="mt-2">
          Waffle Cone - $1.00
        </Typography>

        <Typography variant="h5" textAlign="start" className="mt-4">
          Now Scooping
        </Typography>

        <Typography variant="body1" textAlign="start" className="mt-2">
          Earl Grey -- Horlicks -- Chocolate Salted Caramel -- Milk Chocolate --
          Lavender -- Red Velvet Cheesecake -- White Chocolate Passionfruit --
          Thai Coconut ﻿df -- Mulled Wine Sorbet v, df -- Mango Sorbet v, df --
          Yuzu Sorbet v,df -- Strawberry Balsamic Sorbet v, df
        </Typography>

        <Typography variant="h5" textAlign="start" className="mt-4">
          Past Flavours
        </Typography>

        <Typography variant="body1" textAlign="start" className="mt-2">
          Campfire smoke -- Yuzu -- Earl grey -- Viet berry berry Sorbet-- Black
          sesame -- Pistachio -- PBJ -- Sour Cream -- Matcha -- Ruby Chocolate
          -- Pina Colada -- Milk tea -- Ribena sorbet -- Hazelnut chocolate chip
          -- Malt Milk chocolate -- Hibiscus sorbet -- Chai -- Tuxedo Chocolate
          -- Roasted corn -- Strawberry basil-- Spicy Mayan chocolate --
          Chocolate salted caramel -- Raspberry lemonade Sorbet-- White peach
          Sorbet -- Banana chocolate chip -- Baked Caramel Apple -- Sweet Potato
          -- ChocoBar -- Malted Barley -- Hibiscus -- Smoked Bourbon Chocolate
          -- Horlicks -- White Chocolate Passionfruit -- Milk Chocolate -- Lemon
          Ginger Sorbet -- Red Velvet Cheesecake
        </Typography>
      </div>
    </div>
  );
};

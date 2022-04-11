import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import { CategoryCard } from "../components/Cards";

import heartMini from "../imgs/heartMini.jpg";
import doubleLattle from "../imgs/doubleLattle.png";
import quadCross from "../imgs/quadCross.png";
import cakeThumb from "../imgs/350CakeThumb.png";
import styled from "styled-components";

export const StyledPgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
`;

const categoryList = [
  { name: "wholecakes", label: "Whole Cakes", img: cakeThumb },
  { name: "minis", label: "Minis", img: heartMini },
  { name: "drinks", label: "Drinks", img: doubleLattle },
  { name: "pasteries", label: "Pasteries", img: quadCross },
];

export const Products = () => {
  const navigate = useNavigate();

  return (
    <StyledPgContainer>
      <Typography
        style={{ marginTop: "2em", marginBottom: "2em" }}
        variant="h4"
        textAlign="center"
      >
        Main Menu
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {categoryList.map(({ label, img, name }, i) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1em",
                }}
              >
                <CategoryCard
                  title={label}
                  img={img}
                  onCardClick={() => navigate(`/${name}`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </StyledPgContainer>
  );
};

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { MDBView, MDBMask } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

import styled from "styled-components";

const StyledHoverDiv = styled.div`
  &&& {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    color: red;
  }
`;

const StyledCard = styled(Card)`
  &&:hover {
    opacity: 0.7;
    .hidden {
      opacity: 1;
    }
  }
`;

export const CategoryCard = ({ title, img, onCardClick }) => {
  return (
    // <MDBContainer>
    <StyledCard sx={{ maxWidth: 345 }} onClick={onCardClick}>
      <CardActionArea>
        <CardMedia component="img" height="380" image={img} alt="ice cream" />

        <StyledHoverDiv className="hidden">
          HELLLOHELLLOHELLLOHELLLOHELLLOHELLLO
        </StyledHoverDiv>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
    // </MDBContainer>
  );
};

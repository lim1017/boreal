import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import fullLogo from "../../imgs/fullLogo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "./NavBar.css";

const pages = [
  { label: "Home", name: "" },
  { label: "Products", name: "products" },
  { label: "Flavours", name: "flavours" },
  { label: "About", name: "about" },
];

const StyledLogo = styled.img`
  -webkit-transition: transform 1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const StyledButton = styled(Button)`
  -webkit-transition: transform 1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(`/${page}`);
  };

  return (
    <AppBar style={{ backgroundColor: "#C2DCFF" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {/* fullscreen */}
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <div>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-start",
                  }}
                >
                  <StyledLogo
                    onClick={() => navigate("/")}
                    src={fullLogo}
                    width={200}
                    height={85}
                  />
                </Typography>
              </div>
              <div style={{ justifyContent: "center", width: "80%" }}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {pages.map((page) => (
                    <StyledButton
                      key={page.label}
                      onClick={() => handleCloseNavMenu(page.name)}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontSize: "20px",
                        fontWeight: "300",
                      }}
                    >
                      {page.label}
                    </StyledButton>
                  ))}

                  <a
                    href="https://www.instagram.com/boreal.gateau/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      class="fa fa-instagram fa-3x ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </Box>
              </div>
            </div>

            {/* mobile */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-start",
                  marginRight: "20px",
                }}
              >
                <StyledLogo
                  onClick={() => navigate("/")}
                  src={fullLogo}
                  width={100}
                  height={45}
                />{" "}
              </Typography>
              {/* mobile mode */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon style={{ fontSize: "50px" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.label}
                      onClick={() => handleCloseNavMenu(page.name)}
                    >
                      <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

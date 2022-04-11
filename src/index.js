import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Landing,
  Products,
  Gallery,
  About,
  WholeCakes,
  Minis,
  Drinks,
  Pasteries,
  Flavours,
} from "./pages/";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer";

import { AppThemeProvider } from "./providers/";

const rootElement = document.getElementById("root");
render(
  <AppThemeProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/flavours" element={<Flavours />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />

        <Route path="/wholecakes" element={<WholeCakes />} />
        <Route path="/minis" element={<Minis />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/pasteries" element={<Pasteries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AppThemeProvider>,
  rootElement
);

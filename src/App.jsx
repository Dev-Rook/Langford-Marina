import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollUp from "./Hooks/useScrollUp";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports Start
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// Component Imports End

// Page imports Start
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
// Page imports End

function App() {
  const { scrollUp, backToTop } = useScrollUp();
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "white" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;

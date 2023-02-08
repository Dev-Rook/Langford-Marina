import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollUp from "./Hooks/useScrollUp";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports Start
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Map from "./Components/Other/Map";
// Component Imports End

// Page imports Start
import Home from "./Routes/Home";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Services from "./Routes/Services";
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
          <Route path={"about"} element={<About />} />
          <Route path={"projects"} element={<Projects />} />
          <Route path={"services"} element={<Services />} />
          <Route path={"contact"} element={<Contact />} />
        </Routes>
        {/* <Map /> */}
        <Footer />
      </BrowserRouter>
      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "orange" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;

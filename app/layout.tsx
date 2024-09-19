"use client"

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./backoffice/page";
import Customization from "./customization";
// import PSVitaOLED from "./pages/PSVitaOLED";
// import EditionsLimitees from "./pages/EditionsLimitees";
import Accessories from "./accessories";
import Wallpapers from "./wallpapers";

const RootLayout = () => {
  return (
    <Router>
      <html lang="en">
        <body>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customization" element={< Customization/>} />
            {/* <Route path="/psvita-oled" element={<PSVitaOLED />} />
            <Route path="/editions-limitees" element={<EditionsLimitees />} /> */}
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/wallpaper" element={<Wallpapers/>} />
          </Routes>
          <Footer />
        </body>
      </html>
    </Router>
  );
};

export default RootLayout;

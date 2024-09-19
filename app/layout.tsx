"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./backoffice/page";
import Customization from "./customization";
// import PSVitaOLED from "./pages/PSVitaOLED";
// import EditionsLimitees from "./pages/EditionsLimitees";
import Accessories from "./accessories";
import Wallpapers from "./wallpapers";

import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Router>
  );
};

export default RootLayout;

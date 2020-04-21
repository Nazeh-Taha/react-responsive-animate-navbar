import React from "react";

import { ReactNavbar } from "react-responsive-animate-navbar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <ReactNavbar
      menu={[
        { name: "HOME", to: "/" },
        { name: "ARTICLES", to: "/articles" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
    />
  );
};

export default App;

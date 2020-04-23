import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

const App = () => {
  return (
    <ReactNavbar
      color="#191919"
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

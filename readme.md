# react-responsive-animate-navbar ([Example](https://covid-19-instant-tracker.herokuapp.com/))

> just a simple, flexible & completely customisable responsive navigation bar component.

[![NPM](https://img.shields.io/npm/v/react-responsive-animate-navbar.svg)](https://www.npmjs.com/package/react-responsive-animate-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Desktop Demo:
![Demo](https://s4.gifyu.com/images/ezgif.com-video-to-gif0e86328adf6d2216.gif)
## Responsive Demo:
![Demo](https://s4.gifyu.com/images/27001e3022cd0c4a7.gif)
## Install

```bash
npm install --save react-responsive-animate-navbar
```

## Usage

```jsx
import React from "react";
import ReactNavbar from "react-responsive-animate-navbar";

class Example extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}
```

## Props

| Property | Type   | Default                          | Description                  |
| :------- | :----- | :-----------------------------   | :--------------------------- |
| `color`  | string | "rgb(25, 25, 25)"                | The Background of the navbar |
| `logo`   | string | "https://svgshare.com/i/KHh.svg" | the SVG logo url.            |
| `menu`   | array  | like the example                 | the route url.         |
| `social` | array  | like the example                 | the icons for social links.  |

## License

MIT © [Nazeh-Taha](https://github.com/Nazeh-Taha)

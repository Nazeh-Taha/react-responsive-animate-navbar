# react-responsive-animate-navbar

> react-responsive-animate-navbar

[![NPM](https://img.shields.io/npm/v/react-responsive-animate-navbar.svg)](https://www.npmjs.com/package/react-responsive-animate-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-animate-navbar
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactNavbar from 'react-responsive-animate-navbar'

class Example extends Component {
  render() {
    return <ReactNavbar 
     color="rgb(25, 25, 25)"
     logo="https://svgshare.com/i/KHh.svg"
     menu={[
        { name: "HOME", to: "/" },
        { name: "ARTICLES", to: "/articles" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
    />
  }
}
```

## License

MIT © [Nazeh-Taha](https://github.com/Nazeh-Taha)

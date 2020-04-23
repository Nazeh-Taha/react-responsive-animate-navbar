import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import styles from "./styles.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MobileNav from "./MobileNav";
library.add(fab);

export const ReactNavbar = ({ color, logo, menu }) => {
  const [navLinks, setNavLinks] = useState([
    { name: "HOME", to: "/" },
    { name: "ARTICLES", to: "/articles" },
    { name: "ABOUT ME", to: "/about" },
    { name: "CONTACT", to: "/contact" },
  ]);

  const [background, setBackground] = useState("rgb(25, 25, 25)");
  const [logoUrl, setLogoUrl] = useState("https://svgshare.com/i/KHh.svg");
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    menu ? setNavLinks(menu) : [];
    color ? setBackground(color) : null;
    logo ? setLogoUrl(logo) : null;
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div>
      {width < 1150 ? (
        <MobileNav width={width} logoUrl={logoUrl} background={background}/>
      ) : (
        <Controller>
          <Scene triggerHook="onLeave" duration={300} pin>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ height: "150px" }}
                  to={{ height: "80px", background: background }}
                >
                  <div className={styles.header}>
                    <div className={styles.navLogo}>
                      <Router>
                        <Link to="">
                          <div className="logo-container">
                            <Timeline totalProgress={progress} paused>
                              <Tween
                                from={{ height: "150px" }}
                                to={{ height: "70px" }}
                              >
                                <img
                                  className={styles.LogoImg}
                                  src={logoUrl}
                                  alt="logo"
                                />
                              </Tween>
                            </Timeline>
                          </div>
                        </Link>
                      </Router>
                    </div>

                    <div className={styles.navLinks}>
                      <Router>
                        <ul>
                          {navLinks.map((link, i) => (
                            <li key={i}>
                              <NavLink
                                exact
                                to={link.to}
                                activeClassName={styles.home}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Router>
                    </div>
                    <div className={styles.navSocial}>
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/nazeh-taha/"
                          >
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                          </a>
                          <span className={styles.tooltiptext}>
                            My Linkedin
                          </span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/nazeh200/"
                          >
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                          </a>
                          <span className={styles.tooltiptext}>
                            My Facebook
                          </span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/nazeh_taha/"
                          >
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                          </a>
                          <span className={styles.tooltiptext}>
                            My Instagram
                          </span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="http://nazeh-taha.herokuapp.com/"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                          </a>
                          <span className={styles.tooltiptext}>
                            Online Portfolio
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tween>
              </Timeline>
            )}
          </Scene>
        </Controller>
      )}
    </div>
  );
};

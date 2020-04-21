import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

// import anime from 'animejs'
// import classNames from 'classnames'
// import raf from 'raf'

import styles from "./styles.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import Logoo from "https://nazehtaha.herokuapp.com/static/media/logo.cdad4965.svg";
library.add(fab);

export const ReactNavbar = ({ color }) => {
  const [background,setBackground] = useState("black");
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    color ? setBackground(color) : null;
  }, [])
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div>
      {width < 1150 ? (
        <div>mobile</div>
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
                                src="https://nazehtaha.herokuapp.com/static/media/logo.cdad4965.svg"
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
                        <li>
                        
                          <NavLink exact to="" activeClassName={styles.home}>
                            HOME
                          </NavLink>
                          
                        </li>
                        <li>
                          <NavLink to="/article" activeClassName={styles.home}>
                            ARTICLES
                          </NavLink>
                        </li>
                         <li>
                          <NavLink to="/about" activeClassName={styles.home}>
                            ABOUT ME
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" activeClassName={styles.home}>
                            CONTACT
                          </NavLink>
                        </li>
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
                          <span className={styles.tooltiptext}>My Linkedin</span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/nazeh200/"
                          >
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                          </a>
                          <span className={styles.tooltiptext}>My Facebook</span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/nazeh_taha/"
                          >
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                          </a>
                          <span className={styles.tooltiptext}>My Instagram</span>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="http://nazeh-taha.herokuapp.com/"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                          </a>
                          <span className={styles.tooltiptext}>Online Portfolio</span>
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

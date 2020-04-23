import React, { useRef, useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweenMax, Power3 } from "gsap";
import styles from "./MobileNav.css";

library.add(fab, faGlobe, faBars);

const MobileNav = ({ width, logoUrl, background }) => {
  let nav = useRef(null);
  const [click, setClick] = useState(false);

  const handelExpand = () => {
    if (click === false) {
      TweenMax.to(nav, 0.8, { height: 300, ease: Power3.easeOut });
      setClick(true);
    } else {
      TweenMax.to(nav, 0.8, { height: 0, ease: Power3.easeOut });
      setClick(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.MoNavContainer} style={{background:background}}>
      <div className={styles.mobileNav} style={{background:background}}>
        <div className={styles.navBars}>
          <FontAwesomeIcon icon={faBars} onClick={handelExpand} />
        </div>
        <div className={styles.MoNavLogo}>
          <img src={logoUrl} alt="logo" />
        </div>

        <div className={styles.MoNavSocial}>
          {width > 700 ? (
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nazeh-taha/"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/nazeh200/">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/nazeh_taha/">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://nazeh-taha.herokuapp.com/">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <div
        className={styles.MoNavLinks}
        ref={el => {
          nav = el;
        }}
      >
        <ul>
          <li>
          <Router>
            <Link to="/">HOME</Link>
         </Router>
          </li>
          <li>
          <Router>
            <Link to="/articles-list">ARTICLES</Link>
        </Router>
          </li>
          <li>
          <Router>
            <Link to="/about">ABOUT ME</Link>
            </Router>
          </li>
          <li>
          <Router>
            <Link to="/contact">CONTACT</Link>
           </Router>
          </li>
        </ul>
        {width < 700 ? (
          <div className={styles.mobileNavII}>
            <div className={styles.MoNavSocialII}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/nazeh-taha/"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/nazeh200/">
                    <FontAwesomeIcon
                      icon={["fab", "facebook-f"]}
                      className="svg2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/nazeh_taha/"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                      className="svg"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="http://nazeh-taha.herokuapp.com/">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileNav;

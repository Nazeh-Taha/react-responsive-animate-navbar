import React, { useRef, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweenMax, Power3 } from "gsap";
import styles from "./MobileNav.css";

library.add(fab, faBars);

const MobileNav = ({ width, logoUrl, background, navLinks, socialIcon }) => {
  let nav = useRef(null);
  const [click, setClick] = useState(false);
  const socialLinks = socialIcon.map((icon) => (
    <li>
      <a target="_blank" href={icon.url}>
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    </li>
  ));
  const handelExpand = () => {
    if (click === false) {
      TweenMax.to(nav, 0.8, { height: 300, ease: Power3.easeOut });
      setClick(true);
    } else {
      TweenMax.to(nav, 0.8, { height: 0, ease: Power3.easeOut });
      setClick(false);
    }
  };


  return (
    <div className={styles.MoNavContainer} style={{ background: background }}>
      <div className={styles.mobileNav} style={{ background: background }}>
        <div className={styles.navBars}>
          <FontAwesomeIcon icon={faBars} onClick={handelExpand} />
        </div>
        <div className={styles.MoNavLogo}>
          <img src={logoUrl} alt="logo" />
        </div>

        <div className={styles.MoNavSocial}>
          {width > 700 ? <ul>{socialLinks}</ul> : null}
        </div>
      </div>
      <div
        className={styles.MoNavLinks}
        ref={(el) => {
          nav = el;
        }}
      >
        <ul>
          {navLinks.map((link, i) => (
            <li key={i}>
              <Router>
                <Link to={link.to}>{link.name}</Link>
              </Router>
            </li>
          ))}
        </ul>
        {width < 700 ? (
          <div className={styles.mobileNavII}>
            <div className={styles.MoNavSocialII}>
              <ul>{socialLinks}</ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileNav;

import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import shouldShowComponentBasedOnScroll from "../../hooks/shouldShowComponentBasedOnScroll";
import logo from "../../../public/WhiteLogo.png";

function Header() {
  const location = useLocation();
  const isNavVisible = shouldShowComponentBasedOnScroll({
    isProjectPage: /^\/\d+\/?$/.test(location.pathname),
    resetKey: location.pathname,
    threshold: 40,
  });

  return (
    <nav
      className={`${isNavVisible ? styles.navVisible : styles.navHidden}`}
    >
      <ul>
        <li>
          <Link to="/contact/">Contacts</Link>
        </li>
        <li>
          <Link to="/">
            <img id={styles.logo} src={logo} alt="Holy Graphics logo" />
          </Link>
        </li>
        <li>
          <Link to="/about/">About me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

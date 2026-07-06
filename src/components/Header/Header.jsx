import React from "react";
import { useLocation } from "react-router-dom";
import shouldShowComponentBasedOnScroll from "../../hooks/shouldShowComponentBasedOnScroll";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "../NavigationBar/NavigationBar.module.css";

function Header() {
  const location = useLocation();
  const isNavVisible = shouldShowComponentBasedOnScroll({
    isProjectPage: /^\/\d+\/?$/.test(location.pathname),
    resetKey: location.pathname,
    threshold: 40,
  });

  return (
    <NavigationBar
      navClassName={isNavVisible ? styles.navVisible : styles.navHidden}
      leftlink={{ link: "/contact/", text: "Contacts" }}
      rightlink={{ link: "/about/", text: "About me" }}
    />
  );
}

export default Header;

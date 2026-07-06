import React from "react";
import PropTypes from "prop-types";
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
import logo from "/logo.png";

function NavigationBar({ navClassName, leftlink, rightlink }) {
  return (
    <nav className={navClassName}>
      <ul>
        <li>
          <Link to={leftlink.link}>{leftlink.text}</Link>
        </li>
        <li>
          <Link to="/" className={styles.logoLink}>
            <img className={styles.logo} src={logo} alt="Holy Graphics logo" />
          </Link>
        </li>
        <li>
          <Link to={rightlink.link}>{rightlink.text}</Link>
        </li>
      </ul>
    </nav>
  );
}

NavigationBar.propTypes = {
  navClassName: PropTypes.string,
  leftlink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
  rightlink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default NavigationBar;

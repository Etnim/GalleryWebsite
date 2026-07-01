import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../../public/WhiteLogo.png";
import styles from "./DetailsGallery.module.css";
import { getWorksAmount } from "../../services/projects-data-service.js";

function Footer({ id }) {
  function getPrevLink(id) {
    if (id === 1) return "/" + getWorksAmount();
    return "/" + (id - 1);
  }

  function getNextLink(id) {
    if (id === getWorksAmount()) return "/1";
    return "/" + (id + 1);
  }

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li>
          <Link to={getPrevLink(id)}>← Prev</Link>
        </li>

        <li>
          <Link to="/">
            <img id={styles.logo} src={logo} />
          </Link>
        </li>
        
        <li>
          <Link to={getNextLink(id)}>Next →</Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;

Footer.propTypes = {
  id: PropTypes.number,
};

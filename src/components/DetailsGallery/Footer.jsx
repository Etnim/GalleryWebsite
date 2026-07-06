import React from "react";
import PropTypes from "prop-types";
import styles from "./DetailsGallery.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
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
    <NavigationBar
      navClassName={styles.footer}
      leftlink={{ link: getPrevLink(id), text: "← Prev" }}
      rightlink={{ link: getNextLink(id), text: "Next →" }}
    />
  );
}
export default Footer;

Footer.propTypes = {
  id: PropTypes.number,
};

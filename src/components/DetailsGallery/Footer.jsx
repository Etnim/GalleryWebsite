import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from "../../../public/WhiteLogo.png";
import styles from "./DetailsGallery.module.css";
import { getWorksAmount } from '../../services/projects-data-service.js';


function Footer({ id }) {
    function getPrevLink(id) {
        if (id === 1) return "/GalleryWebsite/" + getWorksAmount();
        return "/GalleryWebsite/" + (id - 1);
    }

    function getNextLink(id) {
        if (id === getWorksAmount()) return "/GalleryWebsite/1";
        return "/GalleryWebsite/" + (id + 1);
    }

    return (
        <footer >
            <Link to={getPrevLink(id)}>← Prev</Link>
            <Link to="/GalleryWebsite/"><img id={styles.logo} src={logo} /></Link>
            <Link to={getNextLink(id)}>Next →</Link>
        </footer>
    );
}
export default Footer;

Footer.propTypes = {
    id: PropTypes.number
}
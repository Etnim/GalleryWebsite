import PropTypes from 'prop-types'
import styles from "../DesignCard/DesignCard.module.css";

function TagList({ tags = ["No tags available"] }) {
    tags.sort();

    return (
        <ul className={styles.tagList}>
            {tags.map((tag, i) => (
                <li key={`${tag}-${i}`}>{tag}</li>
            ))}
        </ul>
    );
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagList;
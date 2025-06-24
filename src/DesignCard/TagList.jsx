import PropTypes from 'prop-types'

function TagList({ tags = ["No tags available"] }) {
    tags.sort();

    return (
        <ul>
            {tags.map(tag => (<li>{tag}</li>))}
        </ul>
    );
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagList;
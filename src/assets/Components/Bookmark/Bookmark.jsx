import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    // console.log(bookmark)
    const {title} = bookmark;
    return (
        <div className="p-2 bg-white my-2 font-semibold rounded-md">
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;
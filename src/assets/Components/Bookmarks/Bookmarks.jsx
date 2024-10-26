import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {

     

    return (
        <div className="w-1/3 mt-3">
            <div className="p-3 bg-gray-200 rounded-md text-purple-600 text-xl font-bold text-center mb-3">
                <h3>Spent Time on Read : {readingTime} mins</h3>
            </div>
            <div className="p-3 bg-gray-200 rounded-md">
                <h1 className="text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
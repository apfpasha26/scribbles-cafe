import PropTypes from 'prop-types'

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { cover, author_img, author_title, posted_date, title, reading_time, hashtags} = blog;
    // console.log(blog);
    return (
        <div className='mb-20 px-3'>
            <div className='py-3'>
                <img className='rounded-xl'  src={cover} alt="" />
            </div>
            <div className='flex justify-between items-center my-3'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                        <img className='h-10' src={author_img} alt="" />
                    </div>
                    <div>
                        <p className='text-lg font-bold'>{author_title}</p>
                        <small className='text-gray-600'>{posted_date}</small>
                    </div>
                </div>
                <div>
                    <small className='text-lg text-gray-600 mr-2'>{reading_time} mins to read</small>
                    <button onClick={() => handleBookmarks(blog)}><img className='h-5' src="../../../../images/bookmark.png" alt="" /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <div className='my-3'>
                <p>
                    {
                        hashtags.map((hash, idx) => <span className='mr-3 text-md text-gray-600' key={idx}><a href="">#{hash}</a></span>)
                    }
                </p>
            </div>
            <button onClick={() => {handleReadingTime(reading_time)}} className='underline text-blue-500' href="">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;
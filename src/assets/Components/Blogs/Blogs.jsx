import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(  () => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])

    return (
        <div className='w-2/3'>
            {
                blogs.map( blog => 
                    <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleBookmarks={handleBookmarks}
                        handleReadingTime={handleReadingTime}
                        >
                    </Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;
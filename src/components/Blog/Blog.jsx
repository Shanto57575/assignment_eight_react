import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Cart from '../Cart/Cart';

const Blog = () => {

    const [blogs, setBlog] = useState([]);
    console.log(blogs);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    const [readTime, setReadTime] = useState([]);

    const handleTime = (time) => {
        const newTime = [...readTime, time]
        setReadTime(newTime);
    }

    const [header, SetHeader] = useState([]);
    const handleBlog = (head) => {
        const newHeader = [...header, head];
        SetHeader(newHeader);
    }

    return (
        <div className='lg:mx-16 lg:flex gap-5 mt-5'>
            <div className='lg:w-2/3'>
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        handleTime={handleTime}
                        handleBlog={handleBlog}
                        blog={blog}></SingleBlog>)
                }
            </div>
            <div className='lg:w-1/3'>
                <Cart readTime={readTime}
                    header={header}>
                </Cart>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
    const { authorImg, backgroundImg, date, hashtag, name, time, header } = props.blog;
    const handleTime = props.handleTime;
    const handleBlog = props.handleBlog;

    return (
        <div className='mb-10 sm:p-5'>
            <img className='md:w-[845px] md:h-[400px] rounded-lg' src={backgroundImg} alt="" />
            <div className='mb-5'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center gap-3 mt-5'>
                        <img className='rounded-full h-16' src={authorImg} alt="" />
                        <div className='font-bold'>
                            <h1>{name}</h1>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div>
                        <button>{time} min read <FontAwesomeIcon className='text-zinc-400' onClick={() => handleBlog(header)} icon={faBookmark} /></button>
                    </div>
                </div>
                <h1 className='text-3xl my-5 font-bold'>{header}</h1>
                <p className='my-5'>{hashtag}</p>
                <a href='#' onClick={() => handleTime(time)} className='text-purple-600 underline'>Mark as read</a>
            </div>
            <hr />
        </div>
    );
};

export default SingleBlog;
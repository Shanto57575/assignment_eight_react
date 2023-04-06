import React from 'react';

const Bookmark = ({ header }) => {

    return (
        <div className='bg-slate-100 text-black font-semibold p-3 text-center border-4 rounded-lg mt-5'>
            <h1 className='text-center font-bold my-2'>Bookmarked Blogs : {header.length}</h1>
            {
                header.map((head, idx) => (
                    <div className='text-black text-lg bg-white border-2 border-white shadow-xl rounded-lg my-5 p-5 m-2' key={idx}>
                        {head}
                    </div>
                ))
            }
        </div>
    );
};

export default Bookmark;
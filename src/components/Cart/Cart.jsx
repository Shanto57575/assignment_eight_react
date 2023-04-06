import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Cart = ({ readTime, header }) => {
    let total = 0;

    for (const time of readTime) {
        total += time;
    }

    return (
        <div>
            <h1 className='bg-slate-100 text-purple-500 font-bold p-4 text-center border-2 border-purple-600 rounded-lg'>Spent time on read : {total} min</h1>
            <Bookmark header={header}></Bookmark>
        </div>
    );
};

export default Cart;
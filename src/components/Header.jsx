import React from 'react';

const Header = () => {
    return (
        <div className='md:mx-16'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">Cyber<span className='text-orange-500'>Duck</span></a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1680726697~exp=1680727297~hmac=758f3891b88e161e02829a2ca5f3628eff7570f03a7457c8f4bbaa17f8465c3e" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;
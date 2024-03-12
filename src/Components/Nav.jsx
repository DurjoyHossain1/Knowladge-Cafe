import React from 'react';
import profile from '../assets/images/profile.png'
const Nav = () => {
    return (
        <nav className='flex justify-between mt-12'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </nav>
    );
};

export default Nav;
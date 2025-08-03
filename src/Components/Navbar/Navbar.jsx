import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <ul className='container mx-auto flex justify-between py-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/navbar'>Navbar</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default Navbar;
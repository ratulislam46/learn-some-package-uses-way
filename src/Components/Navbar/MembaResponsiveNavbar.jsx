import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const MembaResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLink = <>
        <li className="block px-4 py-2 hover:bg-gray-200 border-b">
            <NavLink to='#' >Link 1</NavLink>
        </li>
        <li className="block px-4 py-2 hover:bg-gray-200 border-b">
            <NavLink to="/about" >Link 2</NavLink>
        </li>
        <li className="block px-4 py-2 hover:bg-gray-200 border-b">
            <NavLink href="#" >Link 3</NavLink>
        </li>
    </>;

    return (
        <header className="px-4 py-6 bg-white dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between items-center mx-auto">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold">
                    Logo
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-4">
                    {navLink}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 bg-white shadow-lg rounded-md w-[250px]">
                    <ul>
                        {navLink}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default MembaResponsiveNavbar;

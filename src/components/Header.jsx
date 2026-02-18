import React from 'react';
import {Link} from 'react-router-dom';

function Header({ isDarkTheme, toggleTheme }) {
    return (
        <header className="p-4 shadow-lg bg-zinc-50 dark:bg-zinc-700 border rounded-lg m-6 text-black 
        border-zinc-500 dark:text-white dark:border-zinc-400 ">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Derrick Lor</h1>
                <nav className="flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <Link to="/"><li className="hover:text-zinc-400 transition-colors duration-300">
                            Home</li>
                        </Link>
                        <Link to="/about"><li className="hover:text-zinc-400 transition-colors duration-300">
                            About</li>
                        </Link>
                        <Link to="/contact"><li className="hover:text-zinc-400 transition-colors duration-300">
                            Contact</li>
                        </Link>
                    </ul>
                    {/* Theme Toggle Button */}
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-transparent hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300"
                    >
                        {/* Sun Icon (shown in dark mode) */}
                        <svg
                            id="sun-icon"
                            className={`h-6 w-6 text-yellow-300 ${isDarkTheme ? '' : 'hidden'}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2m9-11h2M1 12h2m16-8-1 1M5 19l-1 1m16 0-1-1M5 5 4 4m14 8A6 6 90 116 12a6 6 90 0112 0z" />
                        </svg>
                        {/* Moon Icon (shown in light mode) */}
                        <svg
                            id="moon-icon"
                            className={`h-6 w-6 text-black ${isDarkTheme ? 'hidden' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;

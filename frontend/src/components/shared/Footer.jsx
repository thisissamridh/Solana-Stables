import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black-gradient-2 px-4 py-6 flex flex-col md:flex-row items-center justify-between shadow-xl rounded-xl">
            <div className="text-center md:text-left">
                <span className="text-neutral-200 text-lg text-gradient font-bold">StarBoard</span>
                <p className="text-neutral-300 text-sm mt-2">
                    The best open-sourced Stablecoin analytics platform.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                <a
                    href="#"
                    className="text-neutral-300 hover:text-white focus:outline-none px-3 py-2 rounded-md bg-black-gradient hover:border-white"
                >
                    About Us
                </a>
                <a
                    href="#"
                    className="text-neutral-300 hover:text-white focus-visible:selection: px-3 py-2 rounded-md bg-black-gradient mt-2 md:mt-0 md:ml-4"
                >
                    Contact Us
                </a>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
                <FaGithub size={24} className="text-neutral-300" />
                <a
                    href="#"
                    className="ml-2 text-neutral-300 hover:text-white focus-visible:selection: px-3 py-2 rounded-md bg-black-gradient"
                >
                    StarBoard on GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { Menu } from '@headlessui/react';
import { HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import Coins from '../../pages/Coins';

export default function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black-gradient-2 h-16 px-4 flex items-center border-gray-200 justify-between shadow-xl">
            <div className="flex items-center gap-2">
                <FcBullish fontSize={34} />
                <div>
                    <span className="text-neutral-200 text-lg text-gradient font-bold">StarBoard</span>
                    <div className="text-xs text-neutral-300">Solana Stable Coin Analytics</div>
                </div>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                {isOpen && (
                    <div className="absolute top-16 right-0 bg-white rounded-md shadow-md p-2 bg-black-gradient">
                        <Link
                            to="/"
                            className="block py-1 px-2 text-neutral-300 hover:text-white focus:outline-none"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/Coins"
                            className="block py-1 px-2 text-neutral-300 hover:text-bla focus:outline-none"
                            onClick={() => setIsOpen(false)}
                        >
                            Coin Analytics
                        </Link>
                    </div>
                )}
            </div>

            <div className="hidden lg:flex items-center gap-4">
                <Link
                    to="/"
                    className="flex items-center text-neutral-300 hover:text-white focus:outline-none px-3 py-2 rounded-md bg-black-gradient hover:border-white"
                >
                    Home
                </Link>
                <Link
                    to="/Coins"
                    className="text-neutral-300 hover:text-white focus-visible:selection: px-3 py-2 rounded-md  bg-black-gradient"
                >
                    Coin Analytics
                </Link>
            </div>
        </div>
    );
}

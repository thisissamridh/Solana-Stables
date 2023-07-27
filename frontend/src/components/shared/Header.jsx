import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { Menu } from '@headlessui/react';
import { HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import  Coins from '../../pages/Coins'

export default function Header() {
	const navigate = useNavigate();

	return (
		<div className="bg-black-gradient-2 h-16 px-4 flex items-center border-gray-200 justify-between shadow-xl">
			<div className="flex items-center gap-2">
				<FcBullish fontSize={24} />
				<div>
					<span className="text-neutral-200 text-lg">StarBoard</span>
					<div className="text-xs text-neutral-300">Solana Stable Coin Analytics</div>
				</div>
			</div>

			<div className="flex items-center gap-4 ">
				<Link to="/" className="flex items-center text-neutral-300 hover:text-white focus:outline-none">
					Home

				</Link>
				<Link to="/Coins" className="text-neutral-300 hover:text-white focus:outline-none">
					Coin Analytics
				</Link>
			</div>
		</div>
	);
}

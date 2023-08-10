// import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import solscan from '../../assets/Solscan.png';
// function Footer() {
//     return (
//         <footer className="px-4 flex flex-col md:flex-row items-center justify-between scrollbar-hide">
//             <div className="text-center md:text-left">
//                 <span className="text-neutral-200 text-lg text-gradient font-bold">StarBoard</span>
//                 <p className="text-neutral-300 text-sm mt-2">
//                     The best open-sourced Stablecoin analytics platform.
//                 </p>
//             </div>

//             <div
//                 className=" flex gap-2 text-neutral-300 hover:text-white focus-visible:selection:  py-2 rounded-md bg-black-gradient ">
//                 <p className="text-neutral-300 text-sm mt-2 items-center"> Data From : </p>
//                 <a  >
//                     <img src={solscan} href="https://solscan.io" alt="Solscan Logo" target="_blank" rel="noopener noreferrer" className="h-10 w-10" />
//                 </a>
//                 <a href="https://hellomoon.link" target="_blank" rel="noopener noreferrer" className="flex items-center">

//                     Hellomoon
//                 </a>
//                 <a href="https://defillama.com" target="_blank" rel="noopener noreferrer" className="flex items-center">

//                     Defilamma
//                 </a>
//             </div>

//             <div className="flex items-center mt-4 md:mt-0">
//                 <FaGithub size={24} className="text-neutral-300" />
//                 <a
//                     href="https://github.com/thisissamridh/StarBoard-Metrics"
//                     className="ml-2 text-neutral-300 hover:text-white focus-visible:selection: px-3 py-2 rounded-md bg-black-gradient"
//                 >
//                     StarBoard on GitHub
//                 </a>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



import React from 'react';
import { FaGithub } from 'react-icons/fa';
import solscan from '../../assets/Solscan.png';

function Footer() {
    return (
        <footer className="px-4 py-4 flex flex-col md:flex-row items-center justify-between scrollbar-hide bg-black-gradient">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <span className="text-neutral-200 text-lg text-gradient font-bold">StarBoard</span>
                <p className="text-neutral-300 text-sm mt-2">
                    The best open-sourced Stablecoin analytics platform.
                </p>
            </div>

            <div className="flex gap-2 text-neutral-300 hover:text-white mb-4 md:mb-0">
                <p className="text-neutral-300 md:text-sm self-center text-xs font-bold">Powered By:</p>
                <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">
                    <img src={solscan} alt="Solscan Logo" className="h-9 w-18 hover:opacity-80" />
                </a>
                <a href="https://hellomoon.io" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    Hellomoon
                </a>
                <a href="https://defillama.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    Defilamma
                </a>
            </div>

            <div className="flex items-center">
                <FaGithub size={24} className="text-neutral-300" />
                <a
                    href="https://github.com/thisissamridh/StarBoard-Metrics"
                    className="ml-2 text-neutral-300 hover:text-white px-3 py-2 rounded-md hover:underline"
                >
                    StarBoard on GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;

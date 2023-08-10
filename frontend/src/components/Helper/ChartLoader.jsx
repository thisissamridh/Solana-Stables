// import React from 'react'

// const ChartLoader = () => {
//     return (

//         <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
//             <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
//             <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//             <div className="flex items-baseline mt-4 space-x-6">
//                 <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
//                 <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
//                 <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
//                 <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
//                 <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>

//             </div>
//             <span className="sr-only">Loading...</span>
//         </div>

//     )
// }

// export default ChartLoader


import React from 'react';

const ChartLoader = () => {
    return (
        <div role="status" className="w-full h-[22rem] bg-black-gradient p-4 rounded-md flex flex-col flex-1 shadow-xl animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>  {/* Title skeleton */}

            <div className="flex-grow relative">  {/* Chart area */}
                {/* X and Y axis skeletons */}
                <div className="absolute top-0 left-0 w-1 bg-gray-200 h-full"></div>
                <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>

                <div className="absolute inset-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-grow bg-gray-200 rounded h-1/3 md:h-full"></div>
                    <div className="flex-grow bg-gray-200 rounded h-1/4 md:h-full"></div>
                    <div className="flex-grow bg-gray-200 rounded h-1/2 md:h-full"></div>
                    <div className="flex-grow bg-gray-200 rounded h-1/5 md:h-full"></div>
                </div>
            </div>

            {/* Optional: Tooltip or legend placeholder */}
            <div className="mt-4 h-5 bg-gray-200 rounded w-1/4"></div>

            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default ChartLoader;

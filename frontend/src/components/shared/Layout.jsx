import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="bg-black-gradient-3 h-screen w-screen overflow-scroll flex flex-col md:flex-row">
            {/* <Sidebar className="md:w-64 w-full h-16 md:h-auto" /> */}
            <div className="flex flex-col flex-1">
                <Header />
				<div/>
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
                
            </div>
        </div>
    );
}

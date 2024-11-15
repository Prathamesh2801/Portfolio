// File: Header.jsx
import React from "react";

export default function Header() {
    const closeDrawer = () => {
        if (window.innerWidth < 1024) {
            const drawerCheckbox = document.getElementById("my-drawer-3");
            if (drawerCheckbox) drawerCheckbox.checked = false;
        }
    };

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar  p-3 lg:px-16 bg-[#0f1630] w-full text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 mx-4 px-2 text-3xl font-bold flex justify-end lg:justify-start">
                        Portfolio
                    </div>
                    <div className="hidden lg:flex items-center space-x-16 text-lg">
                        <a href="/" className="hover:text-blue-500">HOME</a>
                        <a href="/about" className="hover:text-blue-500">ABOUT ME</a>
                        <a href="/portfolio" className="hover:text-blue-500">PORTFOLIO</a>
                        <a href="/services" className="hover:text-blue-500">SERVICES</a>
                        <a href="/experience" className="hover:text-blue-500">EXPERIENCE</a>
                        <a href="/contact" className="btn btn-primary text-white">CONTACT</a>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-4 text-lg">
                    <li><a href="/" onClick={closeDrawer} className="hover:text-blue-500">HOME</a></li>
                    <li><a href="/about" onClick={closeDrawer} className="hover:text-blue-500">ABOUT ME</a></li>
                    <li><a href="/portfolio" onClick={closeDrawer} className="hover:text-blue-500">PORTFOLIO</a></li>
                    <li><a href="/services" onClick={closeDrawer} className="hover:text-blue-500">SERVICES</a></li>
                    <li><a href="/experience" onClick={closeDrawer} className="hover:text-blue-500">EXPERIENCE</a></li>
                    <li><a href="/contact" onClick={closeDrawer} className="hover:text-blue-500">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
}

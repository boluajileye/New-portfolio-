import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-500 pt-2 px-1 sm:px-2 py-1 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-1 sm:px-3 lg:px-3">
                    <div className="flex flex-wrap justify-between items-center mx-auto px-1">
                        <div className="flex items-center relative" style={{ minHeight: '2.5rem' }}>
                            <Link to="/">
                                <span className="relative inline-block">
                                    {/* Animated, floating, navy/blue/white stars */}
                                    <FaStar className="star-float star1 text-blue-900" size={16} style={{ filter: 'drop-shadow(0 0 6px #1e293b)' }}/>
                                    <FaStar className="star-float star2 text-blue-500" size={13} style={{ filter: 'drop-shadow(0 0 8px #3b82f6)' }}/>
                                    <FaStar className="star-float star3 text-blue-200" size={15} style={{ filter: 'drop-shadow(0 0 8px #e0e7ef)' }}/>
                                    <FaStar className="star-float star4 text-white" size={10} style={{ filter: 'drop-shadow(0 0 6px #fff)' }}/>
                                    <span className="self-center text-xl font-extrabold whitespace-nowrap dark:text-white navy-glitter-text px-2">BOLUAJILEYE</span>
                                </span>
                            </Link>
                            {/* Navy blue glitter effect styles */}
                            <style>{`
                                .navy-glitter-text {
                                    background: linear-gradient(90deg, #0a1437 0%, #1e293b 25%, #3b82f6 50%, #e0e7ef 75%, #0a1437 100%);
                                    background-size: 200% auto;
                                    color: #1e293b;
                                    background-clip: text;
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    animation: shimmer 2.5s linear infinite;
                                }
                                @keyframes shimmer {
                                    0% { background-position: 200% center; }
                                    100% { background-position: -200% center; }
                                }
                                .star-float {
                                    position: absolute;
                                    opacity: 0.85;
                                }
                                .star1 {
                                    left: -1.5rem; top: -0.5rem;
                                    animation: float1 3s ease-in-out infinite;
                                }
                                .star2 {
                                    left: 50%; top: -1.2rem;
                                    animation: float2 2.5s ease-in-out infinite;
                                }
                                .star3 {
                                    right: -1.5rem; bottom: -0.5rem;
                                    animation: float3 3.2s ease-in-out infinite;
                                }
                                .star4 {
                                    left: 0.2rem; bottom: -1.2rem;
                                    animation: float4 2.8s ease-in-out infinite;
                                }
                                @keyframes float1 {
                                    0% { transform: translateY(0) rotate(0deg); }
                                    50% { transform: translateY(-8px) rotate(20deg); }
                                    100% { transform: translateY(0) rotate(0deg); }
                                }
                                @keyframes float2 {
                                    0% { transform: translateX(0) rotate(0deg); }
                                    50% { transform: translateX(10px) rotate(-15deg); }
                                    100% { transform: translateX(0) rotate(0deg); }
                                }
                                @keyframes float3 {
                                    0% { transform: translateY(0) rotate(0deg); }
                                    50% { transform: translateY(10px) rotate(15deg); }
                                    100% { transform: translateY(0) rotate(0deg); }
                                }
                                @keyframes float4 {
                                    0% { transform: translateX(0) rotate(0deg); }
                                    50% { transform: translateX(-10px) rotate(-10deg); }
                                    100% { transform: translateX(0) rotate(0deg); }
                                }
                            `}</style>
                        </div>
                        <div className="hidden w-full md:block md:w-auto">

                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link to="/" className="block py-2 pr-1 pl-1 text-[#1e293b] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block py-2 pr-1 pl-1 text-[#1e293b] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="block py-2 pr-1 pl-1 text-[#1e293b] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-2 pr-1 pl-1 text-[#1e293b] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div style={{position: "relative"}} className="-mr-5 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-900"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                        <Link 
                                        onClick={() => setIsOpen(!isOpen)}
                                        to="/" className="block py-2 pr-1 pl-1 text-[#1e293b] dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                         to="/about" className="block py-2 pr-1 pl-1 text-[#1e293b] dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                        to="/portfolio" className="block py-2 pr-1 pl-1 text-[#1e293b] dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                        to="/contact" className="block py-2 pr-1 pl-1 text-[#1e293b] dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </>
    )
}

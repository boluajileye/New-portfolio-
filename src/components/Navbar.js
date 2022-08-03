import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import { useState } from 'react';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-500 pt-2 px-1 sm:px-2 py-1 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-1 sm:px-3 lg:px-3">
                    <div className="flex flex-wrap justify-between items-center mx-auto px-1">
                        <div className="flex items-center">
                            <Link to="/">
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BOLUWATIFE</span>
                            </Link>
                        </div>
                        <div className="hidden w-full md:block md:w-auto">

                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link to="/" className="block py-2 pr-1 pl-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block py-2 pr-1 pl-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="block py-2 pr-1 pl-1 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-2 pr-1 pl-1 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
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
                                        to="/" className="block py-2 pr-1 pl-1 text-gray-700 dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                         to="/about" className="block py-2 pr-1 pl-1 text-gray-700 dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                        to="/portfolio" className="block py-2 pr-1 pl-1 text-gray-700 dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link 
                                onClick={() => setIsOpen(!isOpen)}
                                        to="/contact" className="block py-2 pr-1 pl-1 text-gray-700 dark:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
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

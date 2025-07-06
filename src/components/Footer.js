import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFile, FaFilePdf } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-2 gap-2">
                    <span className="text-sm text-gray-900 dark:text-gray-400 text-center">
                        © {currentYear} <a href="https://boluajileye.com" className="hover:underline font-semibold">BOLUAJILEYE</a>. All Rights Reserved.
                    </span>
                    <div className="flex flex-row items-center space-x-6 mt-2 sm:mt-0">
                        <a href="https://www.linkedin.com/in/ajileye-boluwatife-168896198" className="text-gray-900 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                            <FaLinkedin size={24}/>
                        </a>
                        <a href="https://github.com/boluajileye" className="text-gray-900 hover:text-[#1e293b] dark:text-gray-300 dark:hover:text-white transition-colors duration-200" aria-label="GitHub">
                            <FaGithubSquare size={24}/>
                        </a>
                        <a href="https://flowcv.com/resume/7n9w0vmw6g" className="text-gray-900 hover:text-green-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" aria-label="Resume">
                            <FaFilePdf size={24}/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

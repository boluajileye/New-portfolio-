import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFile } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>

            <footer className="stay p-2 bg-white sm:p-2 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">© 2022 <a href="https://boluajileye.netlify.app" className="hover:underline">BOLUWATIFE</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/in/ajileye-boluwatife-168896198" className="text-gray-900 hover:text-gray-600 dark:hover:text-white">
                        <FaLinkedin/>
                        </a>
                        <a href="https://github.com/boluajileye" className="text-gray-9100 hover:text-gray-600 dark:hover:text-white">
                           <FaGithubSquare/>
                        </a>
                        <a href="https://gitconnected.com/boluajileye/resume" className="text-gray-900 hover:text-gray-600 dark:hover:text-white">
                            <FaFile/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

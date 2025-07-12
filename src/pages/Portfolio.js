import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLink } from 'react-icons/fa';

export const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://boluajileye.com/boluwatife/portfolio.php";
    const fetchData = () => {
        axios({
            method: 'GET',
            url: (url),
          })
            .then((res) => {
                setPortfolio(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            })
        }
    useEffect(() => {
        fetchData();
    }, []);

    // Skeleton loading card
    const LoadingCard = () => (
        <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card bg-primary border-light shadow-soft animate-pulse min-h-full" style={{ minHeight: 420 }}>
                <div className="card-img-top rounded-top bg-gray-200 dark:bg-gray-700 w-100" style={{ height: 180 }}></div>
                <div className="card-body flex flex-col justify-between" style={{ minHeight: 200 }}>
                    <div>
                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-lg-6">
                            <div className="mb-1">
                                <span className="h6 text-underline">Tech</span>
                            </div>
                            <span className="badge badge-secondary text-uppercase bg-gray-300 dark:bg-gray-600 mr-1">JAVA</span>
                            <span className="badge badge-secondary text-uppercase bg-gray-300 dark:bg-gray-600 mr-1">PHP</span>
                        </div>
                    </div>
                    <div className='row px-4 pt-2'>
                    <a href="/" className="mr-4" target='_blank' rel="noopener noreferrer"><FaLink/></a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <> <section className="bg-white dark:bg-gray-900">
        <div className="cpx-4 cpy-2 mx-auto lg:gap-8 xl:gap-0 xl:cpy-24 xl:grid-cols-12">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="h5 mb-3 text-secondary text-underline">MY CONTRIBUTED PROJECTS</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                    { isLoading ? (
                        <>
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </>
                    ) : (
                        portfolio.map((item, index) => { return( 
                            <div className="col-12 col-md-6 col-lg-4 mb-5" key={index+1}>
                                <div className=" bg-danger border-light shadow-soft d-flex flex-column h-100" style={{ minHeight: 420 }}>
                                    <a href={item.pdemo} target='_blank' rel="noopener noreferrer">
                                        <img src={item.pimage} className="card-img-top rounded-top" alt={item.pname} style={{ height: 180, objectFit: 'cover' }} />
                                    </a>
                                    <div className="card-body d-flex flex-column justify-between" style={{ minHeight: 200 }}>
                                        <div>

                                            <a href={item.pdemo} target='_blank' rel="noopener noreferrer">
                                                <h3 className="h5 card-title mt-1 text-uppercase">{item.pname}</h3>
                                            </a>
                                            <div className="card-text text-justify">{item.pdetails}</div>
                                            <div className="row mb-1 mt-1">
                                                <div className="col-lg-6">
                                                    <div className="mb-1">
                                                        <span className="h6 text-underline">Tech</span>
                                                    </div>
                                                    {[...item.ptool]
                                                    .sort(() => 0.5 - Math.random())
                                                    .map((tool, index) => (
                                                        <span key={index} className="badge badge-secondary text-uppercase mr-1">
                                                        {tool}
                                                        </span>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row px-4 pt-2 mt-auto'>
                                            <a href={item.pdemo} className="mr-4" target='_blank' rel="noopener noreferrer"><FaLink/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) } )
                    )}
                    </div>
                </div>
</div>
</section>
        </>
    )
}

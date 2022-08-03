import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithubSquare, FaLink } from 'react-icons/fa';

export const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const url = "https://boluajileye.com/boluwatife/portfolio.php";
    const fetchData = () => {
        axios({
            method: 'GET',
            url: (url),
          })
            .then((res) => {
                setPortfolio(res.data);
            })
            .catch((err) => {
            })
        }
    useEffect(() => {
        fetchData();
    });

    return (
        <> <section className="bg-white dark:bg-gray-900">
        <div className="cpx-4 cpy-2 mx-auto lg:gap-8 xl:gap-0 xl:cpy-24 xl:grid-cols-12">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="h5 mb-6">My completed Projects</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                    { portfolio.map((item, index) => { return( 
                        <div className="col-12 col-md-6 col-lg-4 mb-5" key={index+1}>
                            <div className="card bg-primary border-light shadow-soft">
                                <img src={item.pimage} className="card-img-top rounded-top" alt={item.pname} />
                                <div className="card-body">
                                    <h3 className="h5 card-title mt-1">{item.pname}</h3>
                                    <cp className="card-text">{item.pdetails}</cp>
                                    <div className="row mb-1">
                                        <div className="col-lg-6">
                                            <div className="mb-1">
                                                <span className="h6">Badges</span>
                                            </div>
                                            { item.ptool.map((tool, index) => { return( 
                                            <span key={index} className="badge badge-secondary text-uppercase">{tool}</span>
                                            ) } ) }
                                        </div>
                                    </div>
                                    <div className='row px-4 pt-2'>
                                    <a href={item.pgithub} className="mr-4"><FaGithubSquare/></a>
                                    <a href={item.pdemo} className="mr-4"><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         ) } ) }
                    </div>
                </div>
</div>
</section>
        </>
    )
}

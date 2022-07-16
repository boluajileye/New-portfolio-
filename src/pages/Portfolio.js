import React from 'react';
import { FaGithubSquare, FaLink } from 'react-icons/fa';

export const Portfolio = () => {
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
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card bg-primary border-light shadow-soft">
                                <img src="https://boluajileye.netlify.app/portfolio.png" className="card-img-top rounded-top" alt="Themesberg office" />
                                <div className="card-body">
                                    <h3 className="h5 card-title mt-1">We partnered up with Google</h3>
                                    <cp className="card-text">Some quick example text to build on the card title</cp>
                                    <div className="row mb-1">
                                        <div className="col-lg-6">
                                            <div className="mb-1">
                                                <span className="h6">Badges</span>
                                            </div>
                                            <span className="badge badge-dark text-uppercase">Dark</span>
                                            <span className="badge badge-secondary text-uppercase">Secondary</span>
                                            <span className="badge badge-success text-uppercase">Success</span>
                                            <span className="badge badge-danger text-uppercase">Danger</span>
                                            <span className="badge badge-info text-uppercase">Info</span>
                                        </div>
                                    </div>
                                    <div className='row px-4 pt-2'>
                                    <a href="/" className="mr-4"><FaGithubSquare/></a>
                                    <a href="/" className="mr-4"><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
</section>
        </>
    )
}

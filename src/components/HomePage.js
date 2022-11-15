import React from 'react';

import TableData from './TableData';

export default function homepage(props) {
    
    return (
        <div>
            {/* <!-- Navigation Bar  --> */}
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={props.logo} alt="Website Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0" id='navBarItems'>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="/">Sensing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="/">Automation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="/">Software</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" id="get-a-demo" href="/">Get a demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="/"><img src={props.login} alt="login" id="login" /> Login</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            {/* <!-- Main Container  --> */}
            <div className="container-fluid main-container">
                <div className="container description">
                    <h3>Data Driven Farming Platform</h3>
                    <p>With integrated sensing and automation hardware that lets you gather data at the farm, automate farm
                        operations, manage
                        crops, tasks and workforce.</p>
                </div>
            </div>

            {/* <!-- Feature Container  --> */}
            <div className="container-fluid feature-container">


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 d-flex justify-content-center">
                    <div className="col d-flex feature-card">
                        <div className="d-flex flex-row">
                            <img src={props.feature1} height="75" width="75" alt="feature" />
                            <div className="container">
                                <p className="data">5,241,892,560</p>
                                <p>Sensing Data</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex feature-card">
                        <div className="d-flex flex-row">
                            <img src={props.feature2} height="75" width="75" alt="feature" />
                            <div className="container">
                                <p className="data">2,752</p>
                                <p>Connected Devices</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex feature-card">
                        <div className="d-flex flex-row">
                            <img src={props.feature3} height="75" width="75" alt="feature" />
                            <div className="container">
                                <p className="data">25,618</p>
                                <p>Daily Reports</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex feature-card">
                        <div className="d-flex flex-row">
                            <img src={props.feature4} height="75" width="75" alt="feature" />
                            <div className="container">
                                <p className="data">2,45,871</p>
                                <p>Task Automated</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
 
            <TableData/>

            {/* <!-- Sponsors Container  --> */}
            <div className="container-fluid" id="sponsors">
                <h4>Trusted by best growers</h4>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-3" id="sponsors-img">
                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <img src={props.s1} alt="feature" />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <img src={props.s2} alt="feature" />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <img src={props.s3} alt="feature" />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <img src={props.s4} alt="feature" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid main-container" id="wireless">
                <div className="container description">
                    <h3>Wireless Sensing</h3>
                    <p>Collect, Monitor and Analyse data from your farm in realtime at scale. With over 20+ sensing parameters
                        supported on our
                        platform, don’t miss out keeping a health check of your crops</p>
                </div>
            </div>


            <div className="container-fluid" id="footer-section">

                <footer className="py-3 my-4 border-top">

                    {/* <!-- Copyright statement  --> */}
                    <div className="col-md-4 d-flex align-items-center" id="rights">
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Physiz Agtech Pvt Ltd</span>
                    </div>

                    {/* <!-- Social Media Links --> */}
                    <ul className="nav col-md-4 list-unstyled d-flex justify-content-end">
                        <li className="ms-3"><a className="social-media"  href="https://www.facebook.com/phyfarm/"><i
                            className="fa-brands fa-facebook"></i></a></li>
                        <li className="ms-3"><a className="social-media"  href="https://twitter.com/phyfarm?s=09"><i
                            className="fa-brands fa-twitter"></i></a></li>
                        <li className="ms-3"><a className="social-media" 
                            href="https://instagram.com/phyfarm?utm_medium=copy_link"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="ms-3"><a className="social-media"
                            href="https://www.linkedin.com/company/physiz"><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>

                </footer>

            </div>

        </div>
    )
}

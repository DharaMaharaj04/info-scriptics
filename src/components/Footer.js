import React from 'react';

function Footer() {
    return (
        <div id="footer">
            <footer>
                <article className="ftr-1">
                    <div className="container pt50 pb50">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Company</h3>
                                <ul className="list-unstyled footer-txt">
                                <li><a aria-label="Go to Navigate your next Page" href="/" title="Navigate your next">Future Technology</a></li>
                                <li><a aria-label="Go to About Infosys Page" href="/" title="About Infosys">About
                                    Us</a></li>
                                <li><a aria-label="Go to Careers Page" href="/" title="Careers">Careers</a></li>
                                <li><a aria-label="Go to ESG Page" href="/" title="ESG">CustomerService</a></li>
                                <li><a aria-label="Go to Investors Page" href="/" title="Investors">Insights</a>
                                </li>
                                <li><a aria-label="Go to Newsroom Page" href="/" title="Newsroom">Newsroom</a></li>
                                <li><a aria-label="Go to Alumni Page" href="" target="_blank" title="Alumni" rel="noopener noreferrer">Investors</a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Subsidiaries</h3>
                                <ul className="list-unstyled footer-txt">
                                <li><a aria-label="Go to EdgeVerve Page" href="" title="EdgeVerve Systems" target="_blank" rel="noopener noreferrer">Amplify and Automate Processes</a></li>
                                <li><a aria-label="Go to Infosys BPM Page" href="" title="Infosys BPM" target="_blank" rel="noopener noreferrer">Advanced Quality Solutions</a> </li>
                                <li><a aria-label="Go to Infosys Consulting Page" href="/" title="Infosys Consulting">Scriptics Consulting</a></li>
                                <li><a aria-label="Go to Infosys Public Services Page" href="" title="Infosys Public Services" target="_blank" rel="noopener noreferrer">Cloud Services</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Programs</h3>
                                <ul className="list-unstyled footer-txt">
                                <li><a aria-label="Go to Infosys Foundation Page" href="/" title="Infosys Foundation" target="_blank">Scriptics Foundation</a></li>
                                <li><a aria-label="Go to Infosys Foundation USA Page" href="" title="Infosys Foundation USA" target="_blank" rel="noopener noreferrer">Scriptics Canada</a></li>
                                <li><a aria-label="Go to Infosys Science Foundation Page" href="" title="Infosys Science Foundation" target="_blank" rel="noopener noreferrer">Scriptics Dental AI</a></li>
                                <li><a aria-label="Go to Infosys Leadership Institute Page" href="/" title="Infosys Leadership Institute">Scriptics Cloud Service</a></li>
                                </ul>
                            </div>
                            <div className="clearfix visible-sm"></div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Support</h3>
                                <ul className="list-unstyled footer-txt">
                                <li><a aria-label="Go to Terms of Use Page" href="/" title="Terms of Use">Terms
                                    of Use</a></li>
                                <li><a aria-label="Go to Privacy Statement Page" href="/" title="Privacy Statement">Privacy Statement</a></li>
                                <li><a aria-label="Go to Cookie Policy Page" href="/" title="Cookie Policy">Cookie Policy</a> </li>
                                <li><a aria-label="Go to Safe Harbour Provision Page" href="/safe-harbor-provision.html" title="Safe Harbour Provision">Safe Harbour Provision</a></li>
                                <li><a aria-label="Go to Trademarks Page" href="/" title="Trademarks">Trademarks</a></li>
                                <li><a aria-label="Go to Site Map Page" href="/" title="Site Map">Site Map</a></li>
                                <li><a aria-label="Go to Modern Slavery Statement Page" href="/" title="Modern Slavery Statement" target="_blank">Modern Slavery Statement</a> </li>
                                <li><a aria-label="Go to Payment Guide for Suppliers Page" href="/payment-information-suppliers.html" title="Payment Guide for Suppliers">Payment
                                    Guide for Suppliers</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12 col-xs-12">
                                <h3 className="ftr-head mt-sm-20">Connect with us</h3>
                                <ul className="list-inline footer-txt">
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on Twitter" title="Follow us on Twitter" target="_blank" href="" rel="noopener noreferrer">
                                            <img src="/assets/img/twitter.svg" width="16" height="16" alt="Twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on Facebook" title="Follow us on Facebook" target="_blank" href="" rel="noopener noreferrer"> 
                                            <img src="/assets/img/facebook.svg" width="16" height="16" alt="Facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on LinkedIn" title="Follow us on LinkedIn" target="_blank" href="" rel="noopener noreferrer"> 
                                            <img src="/assets/img/linkedin.svg" width="16" height="16" alt="LinkedIn" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on YouTube" title="Follow us on YouTube" target="_blank" href="" rel="noopener noreferrer">
                                            <img src="/assets/img/youtube.svg" width="16" height="16" alt="Youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>        
                </article>
            </footer>
            <div id="scrollToTop">
                <img src="/assets/img/arrow_up.png" href="#" id="scroll" />
            </div>
        </div>
    )            
}

export default Footer
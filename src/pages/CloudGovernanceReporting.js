import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class CloudGovernanceReporting extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: false,
        autoplay: false,
        dots: false
    };

    return (
      <div>
      <Helmet>
            <title>Scritpics | Cloud Governance Reporting</title>
            <meta name="description" content="Data Strategy" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@Scripticstech"/>
            <meta name="twitter:title" content="Scritpics |Cloud Governance Reporting"/>
            <meta name="twitter:description" content="Cloud Governance Reporting"/>
            <meta name="twitter:creator" content="@Scripticstech"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Scritpics | Cloud Governance Reporting"/>
            <meta property="og:description" content="Scriptics Cloud Governance Reporting"/>
            <meta property="og:image" content="https://www.scriptics.ai/assets/img/og_meta.png"/>
            <meta property="og:url" content="https://www.scriptics.ai/"/>
            <meta name="twitter:image" content="https://www.scriptics.ai/assets/img/1674040738302.png" />
            <meta name="twitter:domain" content="scriptics.ai"/>
            <body id="page-service" />
        </Helmet>
 
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options} >
                
                    <div className=' clo-ser'>  
                        <div className='slide-img'>
                            <img src='/assets/img/Cloud Service/automaation eng.jpg' alt='atomation' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='serv-link col-12'>
                                        <ol className=" nav-links">
                                            <li className="dropdown relative drop-container">
                                                <a href="#" className='serverice_menu textwh'>service<i className="text-uppercase" aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list dropdown-content list-inline">
                                                        <li className='ser-sub-lin'>Development & Maintenance</li>
                                                        <li className=''>Accelerate</li>
                                                        <li className=''>Insight</li>
                                                        <li className=''>Experience</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="active dropdown relative drop-container">
                                                <a href="#" className='serverice_menu textwh'><span >Accelerate</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list dropdown-content list-inline">
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/sales_force'>Sales Force</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                                
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Cloud Digital Transfomation</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <h2 className='text-light'>Cloud Governance & Reporting</h2>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>  
                </OwlCarousel>
            </section> 
            <section className='Scr-cld-nav'>
                <div className=''>
                    <nav>
                        <li className='active'><a href="#1">Solutions</a></li>
                        <li><a href="#2">Industries</a></li>
                    </nav>
                
                    <div className="scrolling-box">
                        <section id="1" className='clo-meth'>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-12'>
                                        <h2 className='text-center'>Our Solutions</h2>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Cloud-Governance.svg' alt="Cloud-Governance" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Cloud Governance</h3>
                                                <p>The smart cloud management platform from Scriptics offers
                                                automatic warnings and triggers in response to security incidents and budget thresholds.
                                                Implement a durable guardrail and dynamic control over the cloud environment using a
                                                centralized governance model.                                                
                                                </p>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Automation-Reporting.svg' alt="Automation-Reporting" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Automatic Reporting </h3>
                                                <p>Automatic alerts and triggers against security incidents and budget
                                                thresholds are possible thanks to Scriptics’ intelligent cloud management platform. Using
                                                a centralized governance strategy, implement a robust fence and provide dynamic control
                                                of the cloud environment.                                               
                                                </p>    
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        
                        </section>
                        
                        <section id="2" className='clo-indus'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h2 className='text-center'>Industries</h2>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <img src='/assets/img/financial-services.jpg'  alt='financial-services' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='clo-indu'>
                                            <h3>Financial Industries</h3>
                                            <p>48 prestigious financial services companies have put their trust in Scriptics to manage a cloud-led, agile-first digital transformation. Utilizing strategic roadmaps for infrastructure modernization and security, they have reduced overall expenditures by 50% while achieving over 60% better time-to-delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row cfcr'>
                                
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='clo-indu'>
                                            <h3>Banking & Insurance </h3>
                                            <p>In order to close their data centers ahead of schedule, Scriptics has
                                            provided native cloud solutions and cloud migration services to 28 international banks
                                            and insurance companies. Scriptics's advanced analytics models, SecOps, cloud banking
                                            solutions, and modernization plans enable them to save 70% of their time while saving
                                            60% of their money.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <img src='/assets/img/banking-insurance.jpg'  alt='banking-insurance' />
                                    </div>
                                </div>
                                <div className='row'>    
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <img src='/assets/img/media-entertainment.jpg'  alt='media-entertainment' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='clo-indu'>
                                            <h3>Media & Entertainment</h3>
                                            <p>22 M&E firms around the world have delegated Scriptics to
                                            modernize and scale out their media platforms so that millions of consumers can access
                                            them easily. They've secured their applications with agility and deployed them on the
                                            public cloud to meet regulatory obligations while saving money.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row cfcr'>    
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='clo-indu'>
                                            <h3>Telecom</h3>
                                            <p>The analytics, modernisation, and ML/AI solutions provided by Scriptics have
                                            simplified the digitization and modernization projects of ten telecom players. It has
                                            enabled them to establish fully automated workflows, increase user involvement by more
                                            than 50%, and speed insights delivery while maintaining 99% process correctness.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <img src='/assets/img/Telecommunication-1.jpg'  alt='Telecommunication' />
                                    </div>
                                </div>
                                <div className='row'>    
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <img src='/assets/img/technology.jpg'  alt='technology' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='clo-indu'>
                                            <h3>Technology</h3>
                                            <p>Scriptics has vast experience providing cloud migration, managed services,
                                            advanced analytics, and business insight to 75 technology firms. This not only increased
                                            their business performance by more than 60% on average, but also enabled on-demand
                                            scalability with over 30% cost savings.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
      </div>
    )
  }
}

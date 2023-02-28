import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class DataStrategy extends Component {
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
            <title>Scritpics | Data Strategy</title>
            <meta name="description" content="Data Strategy" />
            <body id="page-service" />
        </Helmet>
 
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options} >
                
                    <div className='clo-ser'>  
                        <div className='slide-img'>
                            <img src='/assets/img/Data-Strategy.jpg' alt='Data-Strategy' />   
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
                                            <h2 className='text-light'>Data Strategy</h2>
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
                       <li className='active'> <a href="#1">Solutions</a></li>
                        <li><a href='#2'>Framework</a></li>
                        <li><a href="#3">Industries</a></li>
                    </nav>
                
                    <div className="scrolling-box">
                        <section id="1" className='clo-meth'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h2 className='text-center'>Our Solutions</h2>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Consulting-Strategy.svg' alt="Consulting-Strategy" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Consulting & Strategy</h3>
                                                <p>Define recommended practises for establishing an
                                                industry-aligned data center of excellence (COE). Create a data strategy and guidelines
                                                that are most suited to the organizational infrastructure and business objectives.
                                                </p>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Assessment.svg' alt="Assessment.svg" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Assessment</h3>
                                                <p>Examine the existing data pipeline and create an architecture that meets the
                                                requirements and corresponds to the data maturity stage. With the current and future
                                                challenge navigation, you can get advice to optimize the data pipeline. Prioritize the
                                                following steps in the data transformation process.                                                
                                                </p>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Knowledge-Management.svg' alt="Knowledge-Management" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Knowledge Management</h3>
                                                <p>Optimize data processing and distribution by defining
                                                knowledge management throughout the entire enterprise. With an integrated framework
                                                and a comprehensive roadmap, assess the technology requirements and regulate all
                                                knowledge management activities.                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        
                        </section>
                        <section id='2' className='clo-framework'>
                            <div className='continer'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <h2 className='text-center'>Framework</h2>
                                        <img src='/assets/img/Accelerate-Data-Strategy-DAI-1.jpg' alt='Accelerate-Data-Strategy-DAI-1' />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="3" className='clo-indus'>
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

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceInteractionStudio extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: false,
        dots: false,
        autoplay: false,
        dots: false
    }; 

    return (
      <div>
      <div className="service-page">
      <Helmet>
          <title>Scritpics | Salesforce Interaction Studio</title>
          <meta name="description" content= "Salesforce Interaction StudioQ" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@Scripticstech"/>
          <meta name="twitter:title" content="Scritpics | Salesforce Interaction Studio"/>
          <meta name="twitter:description" content="Scritics Salesforce Interaction Studio"/>
          <meta name="twitter:creator" content="@Scripticstech"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Scritpics | Salesforce Interaction Studio"/>
          <meta property="og:description" content="Scriptics Salesforce Interaction Studio"/>
          <meta property="og:image" content="https://www.scriptics.ai/assets/img/og_meta.png"/>
          <meta property="og:url" content="https://www.scriptics.ai/"/>
          <meta name="twitter:image" content="https://www.scriptics.ai/assets/img/1674040738302.png" />
          <meta name="twitter:domain" content="scriptics.ai"/>
          <body id="page-service" />
      </Helmet>
      <section className='srv-main'>
          <OwlCarousel className="owl-theme" {...options} >
              <div className='clo-ser'>  
                  <div className='slide-img'>
                      <img src='/assets/img/Sales force/salesforce studio.jpg' alt='salesforce studio.jpg' />   
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
                                      <li className="dropdown relative drop-container">
                                                <a href="/sales_force" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_salecloud'>Salesforce Sales Cloud</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_cpq'>Salseforce CPQ</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_industry'>Salesforce Industry</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_marketing'>Salesforce Marketing</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_studio'>Salesforce Studio</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce_service'>Salesforce Service</Link>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/salesforce-bussinte'>Salesforce Bussiness Intelligence</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to=''></Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to=''></Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </li>    
                                  </ol>
                              </div>
                              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                  <div className='slide_content'>
                                      <span className='sale-title white-color'>Salesforce Interaction Studio</span>
                                  </div>
                              </div>    
                          </div>
                      </div>
                  </div>
              </div>  
              
          </OwlCarousel>
      </section>
      <section className='blue-dark sale-info'>
          <div className='container'>
              <div className='row cfcr'>
                  <div className='col-12 col-lg-7 col-md-7 col-sm-12 col-xs-12' >
                      <p>Deploying and optimizing Interaction Studio from within Salesforce can bring tremendous value to your organization as it allows you to deliver personalized experiences across all channels in real time But this can be difficult for marketing teams to do. Scriptics is a Certified Salesforce Interactive Studio Partner. Our team of experts have years of experience and are ready to work with you to help you get the most out of your Interactive Studio.</p>
                  </div>
                  <div className='col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12' >
                     <img src='/assets/img/RevOps_top.svg' alt='RevOps_top' />
                  </div>
              </div>
          </div>
      </section>
          <section className='sale-market'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="sale-info-cont">
                                    <h4 className="indus-title_1">Connect with your customers from leads to loyal customers                                    </h4>
                                    
                                    <p>With Interaction Studio, we'll work with you to inspire website visitors and engage with them every step of the way, from lead to loyalty You get a deep understanding of each of your customers and prospects – who they are, how they interact, their preferences, and use that information with Einstein to personalize each individual at scale.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="sale-info-img">
                                    <img src='/assets/img/revenue-operations-1.png' alt='revenue-operations-1' />
                                </div>
                            </div>
                        </div>
                    </div>        
                </section>
                <section className='sale-info sale-info-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="sale-info-cont">
                                    <p>Interaction Studio can be combined with other tools like Journey Builder so you can deliver the next best action or offer at the right time on the right channel. </p>
                                    <li>Segmentation and targeting</li>
                                    <li>activation experience</li>
                                    <li>Integration                                    </li>
                                    <li>machine learning experiments</li>
                                    <li>A/B testing and optimization                                    </li>
                                    <li>campaign analysis</li>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="sale-info-img">
                                    <img src='/assets/img/revenue-operations-2.png' alt='revenue-operations-2' />
                                </div>
                            </div>
                        </div>
                    </div>        
                </section>
        </div>
      
      </div>
    )
  }
}

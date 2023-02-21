import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export default class SalesForce extends Component {
  render() {
    return (
        <div className="service-page">
        <Helmet>
            <title>Scritpics | Sales Force</title>
            <meta name="description" content= "Sales Force" />
            <body id="page-service" />
        </Helmet>
            <div className="spacer"></div>
            <section className='ser-link'>
                <div className="">
                    <div className="container">
                        <ol className=" nav-links">
                            <li className="dropdown relative drop-container">
                                <a href="#" className='serverice_menu'>service<i className="text-uppercase " aria-hidden="true"></i></a>
                                <div className="bg-white">
                                    <ul className="list dropdown-content list-inline ">
                                        <li className='ser-sub-lin'>Development & Maintenance</li>
                                        <li className='ser-sub-lin'>Accelerate</li>
                                        <li className='ser-sub-lin'>Insight</li>
                                        <li className='ser-sub-lin'>Experience</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="active dropdown relative drop-container">
                                    <a href="#" className='serverice_menu'><span >Experience</span><i className="text-uppercase " aria-hidden="true"></i></a>
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
                            
                            <li className='serverice_menu_last dropdown relative drop-container'><span>Sales Force</span></li>
                        </ol>
                    </div>
                </div>
            </section>
            
            <section className="srv-content">
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="indus-info">
                                    <h2 className="indus-title_1">Transform your vision into cutting-edge applications that gather insights.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <p className="srv-info">Over the past few decades, the evolution in technology has disrupted businesses in several ways. It has all been possible because of the cutting-edge technologies - Artificial learning and Machine learning. These technologies power applications to gather deep insights with every possible interaction and redefine the ecosystem with transformative solutions.</p>
                                <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management.</p>
                                <p>We create solutions that run on advanced algorithms to process images and videos and return actionable insights and information. Right from the identification of images based on their features, colours, objects, logos, and more to image and video analysis, our services guarantee customer satisfaction like no other. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                            <img className="srv-con-img" src="/assets/img/ai_ (1).png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <h4 className="srv-info">Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes such as:</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="srv-level">
                <div className="container">
                    <div className="row">
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-bottom">
                            <div className="image_with_text">
                                <img src="/assets/img/choice.svg" alt="service level icon 1"/>
                                <p>We conduct thorough evaluation and assess the organization on AI maturity</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                <p>Our use case discovery process ensures that the client’s business operations are aligned with prompt change management methods.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                            <div className="image_with_text">
                                <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                <p>We develop and deliver a comprehensive automation ecosystem, pooling the best experts and resources to promote organization-wide operational excellence.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 ">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                <p>Our robotic process automation (RPA) capabilities and chatbot development services ensure their swift and streamlined utility in ideal use cases that demand automation.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                <p>Our custom solutions enable democratization of artificial intelligence and drives hassle-free adoption across the enterprise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capability">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <h2>CAPABILITIES</h2>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <img src="/assets/img/robotic.svg" alt="capabilities"/>
                                <p>Enable enterprises to extract and obtain actionable insights from videos and images</p>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                </div>
                                <p>Generate actionable insights to capture the real-time image and video analytics to enable behavior detection and image tracking.</p>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                </div>
                                <p>An amalgamation of business intelligence, artificial intelligence, and cutting-edge technologies to automate routine processes.</p>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                </div>
                                <p>Refine the ongoing processes across the organization for better streamlined operations.</p>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                </div>
                                <p>Streamline business processes across diverse departments including sales, department, marketing, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

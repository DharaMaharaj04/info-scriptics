import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AIAutomation extends Component {
    render() {

        const options = {
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            dots: true,
            autoplay: true,
            dots: true
        };

        return (
            <div className="service-page">
                <Helmet>
                    <title>Scritpics | AI & Automation</title>
                    <meta name="description" content="AI & Automation" />
                    <body id="page-service" />
                </Helmet>
                <div className="spacer"></div>
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src="/assets/img/employee-experience-lead.png" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">MAKE THE FIRST MOVE WITH STRATEGY & CONSULTING</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/cloud-data-cultivates-cs-lead.png" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">INITIAL DESIGN WITH INTERACTIVE TECHNOLOGY</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/enterprise-agility-lead-mob.jpg" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
                <section className='srv-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                <h3>Unleash Resilient and Intelligent Automation for Delivering Value at Scale.</h3>                    
                            </div>
                            <div className='col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12'></div>
                        </div>
                        <div className='row indus-info'> 
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                <p>As organizations across diverse domains and industries are trying to incorporate digital transformation as part of their processes, many of them are struggling to grab their opportunities at the same pace. They commit to the idea of digital change but seldom achieve the scale, precision, acknowledgement, and response to volatile market disruptions. After all, the real-world obstacles test their resilience to the tee.</p>
                                <p>At Scriptics, we ensure that organizations are not swayed by digital disruption by empowering them with Artificial Intelligence (AI).</p>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 indus-img-col fadeInUp animated from-right'>
                                <img src="/assets/img/ambient-intelligence-lead-mob.png" />
                            </div>
                        </div>    
                    </div> 
                </section>
                <section className='srv-level'>
                    <div className='container'>
                        <div className='row'>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                    <h4>Our use case discovery process ensures that the client???s business operations are aligned with prompt change management methods.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <h4>We develop and deliver a comprehensive automation ecosystem, pooling the best experts and resources to promote organization-wide operational excellence.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <h4>We conduct thorough evaluation and assess the organization on AI maturity.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <h4>Our robotic process automation (RPA) capabilities and chatbot development services ensure their swift and streamlined utility in ideal use cases that demand automation.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="industries level icon 4"/>
                                    <h4>Our custom solutions enable democratization of artificial intelligence and drives hassle-free adoption across the enterprise.</h4>
                                </div>
                            </div>
                        </div>    
                    </div>
                </section>
                <section className='capability'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h2>CAPABILITIES</h2>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                        <p>Integration of automation and analytics with organization processes with chatbots etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Devise and apply technologies that simplify and automate routine processes that do not require manual intervention.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities icon 3"/>
                                        <p>Reinvent and redefine marketing, procurement, human resource, asset management and many more functions across the enterprise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities icon 2"/>
                                        <p>Embed business intelligence from diverse departments including marketing, sales, advertising, supply chain, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Generate relevant insights to drive informed decision-making with subsequent speed-to-value impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

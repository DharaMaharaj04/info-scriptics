import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class DevelopmentMaintance extends Component {
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
                    <title>Scritpics | Development_maintance</title>
                    <meta name="description" content="Development_maintance" />
                    <body id="page-service" />
                </Helmet>
                

                <section className='srv-main'>
                    
                    <OwlCarousel className="owl-theme" {...options} >
                    
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src='/assets/img/develop-main.png' alt='development' />   
                                <div className='slider-overlay-amethyst'></div>  
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="active dropdown relative  drop-container">
                                                    <a href="#" className='serverice_menu textwh'>service<i className="" aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list pl0 dropdown-content list-inline">
                                                            <li className=''>Development & Maintenance</li>
                                                            <li className=''>Accelerate</li>
                                                            <li className=''>Insight</li>
                                                            <li className=''>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'><span >Development & Maintenance</span><i className="" aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list pl0 dropdown-content list-inline">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                                                Mobile app development & maintenance</li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>Mobile app development & maintenance</li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>UI/UX Design</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                           
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                    </OwlCarousel>
                </section>
                <section className='devmain'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='devemain-cont'>
                                    
                                    <h3>Web app development & maintenance</h3>
                                    <p>We build applications that work for your business and your users. Whether it's complex enterprise platforms and data storage, responsive web applications, or marketing sites, our web solutions work seamlessly, providing users with a consistent experience across all platforms</p>
                                    <p>For a successful web development strategy, consider not only what your company's technology footprint looks like now, but what it should look like in the future. Our solution architect and his web development team work with you early in your Scriptics engagement to define exactly how your business will evolve. Next, strategically establish a roadmap and determine the role technology will play in achieving your business goals.</p>
                                    <ol>
                                        <li>E- commerce web </li>
                                        Ecommerce website design and development services help create ecommerce solutions that are uniquely tailored to your business in terms of visual design, functionality, and customer experience secrets. At ScienceSoft, e-commerce developers create custom storefronts, build scalable microservices architectures, and digitize back-office e-commerce operations.
                                        <li>Dynamic web </li>
                                        As technology, trends and customer preferences change, it is important for website owners to keep their websites up to date. All of this is easily achieved with a dynamic website. Scriptics lets you choose from hundreds of templates for the website that's right for your business.<br/><br/>Having a dynamic website means you have the freedom to change it as needed. Unlike static websites, each page displays different content. This way, visitors never get bored because they are always busy.
                                        <li>Enterprise web</li>
                                        Enterprise web development is an essential tool for businesses of all sizes because it allows you to create custom web applications and software that meet your unique needs. Whether you need a custom business portal or e-commerce platform, our team has the experience and expertise to deliver results. Additionally, we work tirelessly to ensure that our website is functional, intuitive and user-friendly so that you can connect with your customers and achieve your goals.
                                        <li>Responsive web</li>
                                        Want Your Mobile Visitors to Convert Effectively? <br/><br/>Scriptics delivers responsive websites and web portals with self-explanatory navigation, mobile-specific interactive elements, and smooth performance on any network, ensuring high mobile conversion rates.
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='ser'>
                        <div className='container'>
                            <div className='row'>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/ios-apps.jpg' alt="ios-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>IOS App</h3>
                                            <p>Scriptics Technologies keeps things straightforward; prior to designing an iOS application, we carefully comprehend the client's requirements.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/android-app.png' alt="android-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Android app</h3>
                                            <p>We can deliver top-notch mobile apps that are tailored to the needs of the customers thanks to our knowledge in Android development.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/restaurant.jpg' alt="restaurant-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Restaurant app</h3>
                                            <p>scriptics specializes in the complete creation of custom portable appointments and agrees that a dedicated versatile dining program serves as a sophisticated extension of your dining experience.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/augment.png' alt="augment-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Augmented app</h3>
                                            <p>We help startups and enterprises create compelling AR experiences to entertain, engage, and grow their user base. </p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/health-app.png' alt="HealthCare app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>HealthCare app </h3>
                                            <p>Enabling people to provide better, on-demand access to health care and real-time health care is not just for the general public, but also for striving to provide better alternatives to the traditional health care model.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/e-commerce-app.png' alt="e-commerce-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>e-commerce app</h3>
                                            <p>Grow your ecommerce business by removing the spider web and moving your business to the web. We have automated transaction and now have peace of mind in our inventory management system.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/payment.jpg' alt="payment app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Payment app</h3>
                                            <p>We design from the ground up a bespoke mobile payment solution that best fits your business needs: Convenience, Enhance Security, Increase Productivity, Boost Sales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/cust-exper.jpg' alt="customer experience-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Improve Customer Experience</h3>
                                            <p>Mobile payment apps make the entire shopping process much easier and faster.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/cash-app.png' alt="Cash-Flow Management" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Better Cash-Flow Management</h3>
                                            <p>Businesses can gain higher coins glide management. Mobile charge programs simplify business enterprise accounting and decrease charges along with financial institution charges</p>
                                           
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

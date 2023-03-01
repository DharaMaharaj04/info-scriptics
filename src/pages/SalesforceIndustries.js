import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceIndustries extends Component {
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
                <title>Scritpics | SalesforceIndustries</title>
                <meta name="description" content= "SalesforceIndustries" />
                <body id="page-service" />
            </Helmet>
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options} >
                    <div className='clo-ser'>  
                        <div className='slide-img'>
                            <img src='/assets/img/banner-salesforce-sales-cloud.jpg' alt='banner-salesforce-sales-cloud' />   
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
                                                
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Sales Force</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <span className='sale-title white-color'>Salesforce Industries/Vlocity</span>
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
                            <p>Scriptics is happy to provide customized services for Salesforce Industries (formerly known as Vlocity) deployment and consulting. Salesforce Industries offers pre-built solutions such as the Communications Cloud, Energy and Utilities Cloud, and Financial Services Cloud, built on proven foundations that help organizations accelerate business processes business and increase customer engagement.</p>
                            <p>These pre-built solutions in the Salesforce Platform can help address your specific industry-specific needs by taking common requirements and packaging them for easier deployment for your organization.</p>
                        </div>
                        <div className='col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12 per100' >
                           <img src='/assets/img/Telco-09-cropped-1.png' alt='Telco-09' />
                        </div>
                    </div>
                </div>
            </section>
                <section className='sale-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="sale-info-cont">
                                    <p>Our team of Salesforce Industries experts provide the expertise and guidance you need to leverage the powerful capabilities of the Salesforce Platform. With our experience in Salesforce Industries (Vlocity and Omnistudio) and pre-configured accelerators, we can significantly reduce deployment time and costs, while providing you with a data model. Proven data, with the industry-specific fields, automation and security you need, included</p>
                                    <p>Scriptics understands that even with industrial clouds, every business has unique needs and goals Our consultants provide tailored solutions that meet your specific needs. With our expertise across multiple Salesforce Industrial Clouds, we strive to deliver the best service possible and deliver results that exceed expectations.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="sale-info-img per100">
                                    <img src='/assets/img/Marketo-integration.png' alt='Marketo-integration' />
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

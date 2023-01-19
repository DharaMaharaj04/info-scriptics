import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SOC extends Component {
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
                <title>Scritpics | SOC</title>
                <meta name="description" content="SOC" />
                <body id="page-service" />
            </Helmet>
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src='/assets/img/strategicservices-h8.jpg' alt='SOC' />   
                                <div className='slider-overlay-amethyst'></div>  
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2>Force-Multiply Your Security</h2>
                                                <p className='text-justify'>Scriptics Strategic Services can help you understand precisely where your organization’s risks lie and support your organization in maximizing the impact of your security investments and strategy</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                    </OwlCarousel>
                </section>
                <section className='strategicservices'>
                    <div className='container-fuild'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                <img src='/assets/img/strategicservices-it3-overview.jpg' alt='strategicservices-it3-overview' />                   
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp animated from-right'>
                                <div className='strategicservices-right'>
                                    <h2 className='text-center'>Service Overview</h2>      
                                    <p className='text-justify'>Scriptics Strategic Services offered by Scriptics Security Services can help your organization align critical security components (process, technology and people) from a foundational perspective to achieve a state of prevention while reducing overall risk. Our team has a deep knowledge of compliance, control frameworks and C-Suite experience.</p>     
                                </div>            
                            </div>
                        </div>
                    </div>
                </section>
                <section className='vCISO'>
                    <div className='container-fuild vCISO-con'>
                        <div className='row vCISO-row'>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 no-gutters fadeInUp animated from-right'>
                                <div className='vCISO-txt'>
                                    <h2 className='text-center'>Virtual CISO (vCISO)</h2>      
                                    <p>As a trusted advisor, the BlackBerry Security Services offers Virtual CISO (vCISO) services to assist organizations with meeting these needs. Our vCISOs are former CISOs themselves and are able to operate across all levels of the organization. Our vCISOs are also backed by the depth and breadth of the full BlackBerry Security Services Team of experienced consultants to provide additional reach-back capabilities to address client-specific needs.</p>   
                                    <p >BlackBerry Security Services has the strategy, expertise, and professionalism to aid organizations from initial assessment to the ongoing management of a cybersecurity program. Our vCISO methodology and approach involve:</p>  
                                    <ul>
                                        <li><strong>Assessing</strong> current security programs, strategy, and alignment with business objectives</li>
                                        <li><strong>Strategic and tactical planning</strong> that reduces financial impact to the organization</li>
                                        <li><strong>Implementing</strong>solutions and projects from start to finish to enable a more secure business</li>
                                        <li><strong>Managing</strong>oversight, governance, and daily tactical security operations functions and resources</li>
                                    </ul>
                                </div>            
                            </div>
                        </div>
                        <div className="row vCISO-row">
                            <div className="col-12 col-sm-12">
                                <a className="cta cta-primary cta-big" href="/contact" target="_blank">
                                    <span className="cta__bullet-icon"></span>Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='ss-IR'>
                    <div className='container-fuild'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp animated from-right'>
                                <div className='ss-IR-left'>
                                    <h3 className='text-center'>At The Intersection of Endpoint Protection and Incident Response</h3>  
                                    <h6>Why Every Security Strategy Needs IR — and Vice-Versa</h6>    
                                    <p className='text-justify'>Prevent, Detect, Respond. These are the cornerstones of information security—and they must work in tandem. Yet many organizations treat incident management as separate from their SOC. Learn why that's an issue—and what you should do instead.</p>   
                                    <a className="cta cta-primary cta-big" href="/contact" target="_blank">
                                        <span className="cta__bullet-icon"></span>Our Blog
                                    </a>  
                                </div>            
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 fadeInUp animated from-left'>
                                <img src='/assets/img/strategic-services-it4-sans-wp.png' alt='strategic-services-IR' />                   
                            </div>
                        </div>   
                    </div>
                </section>
                <section className='ss-Assessment'>
                    <div className='container-fuild'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 fadeInUp animated from-left'>
                                <img src='/assets/img/strategicservices-it3-gapassesment.jpg' alt='strategicservices-uplift' />                   
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp animated from-right'>
                                <div className='ss-Assessment-right'>
                                    <h3 className='text-center'>Security Assessments and Uplift</h3>      
                                    <p className='text-justify'>Your work is constantly changing. Our team of expert assessors can compare where you are today to where you need to be. Existing security roadmaps have become obsolete and need to be strengthened to include the intricacies and dynamics of remote work. With an Security Assessment, BlackBerry Security Services can help your organization manage information security risk intelligently with benefits such as:</p>
                                    <ul>
                                        <li>Receive an impartial view and baseline of where you are today</li>
                                        <li>Get a roadmap for where you need to be (relative to established security frameworks)</li>
                                        <li>Receive an executive-ready report and plan for uplift, including opportunities for efficiency improvement</li>
                                    </ul> 
                                    <a className="cta cta-primary cta-big" href="/contact" target="_blank">
                                        <span className="cta__bullet-icon"></span>Our Blog
                                    </a>    
                                </div>            
                            </div>
                        </div>
                    </div>
                </section> 
                <section className='Custom-Staff'>
                        <div class="cylance-mod-it16 content--grey">
                            <div class="cylance-mod-container-headline container-custom-staff vCISO-con">
                                <article>
                                    <div class="row vCISO-row">
                                        <div class="col-sm-12 col-md-5 offset-md-right-1 col-lg-5 offset-lg-right-1">
                                            <div class="cylance-mod-it16__text-container">
                                                <h3 class="cylance-mod-headline cylance-mod-it16__title">Custom Staff Augmentation</h3>
                                                <div class="cylance-mod-body-copy">
                                                    Finding and hiring a candidate with relevant information security experience is not always easy.&nbsp; BlackBerry Security Services can offer a tailored staff augmentation, with the goal of becoming an extension of your information security team. &nbsp;Fill your gaps in staffing with subject matter experts in the following areas:
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cylance-mod-headline-content col-sm-12 col-md-3 col-sm-12">
                                            <div class="cylance-mod-it16__media-container">
                                              <div class="cylance-mod-body-copy">
                                                <ul>
                                                    <li>Digital Forensics</li>
                                                    <li>Incident Response (IR)</li>
                                                    <li>Threat Hunting</li>
                                                    <li>SOC Analyst</li>
                                                </ul>
                                            </div>   
                                        </div>
                                    </div>
                                    <div class="cylance-mod-headline-content col-xs-12 col-md-3 col-sm-12">
                                        <div class="cylance-mod-it16__media-container">      
                                            <div class="cylance-mod-body-copy">
                                                <ul>
                                                    <li>Red Team Analyst</li>
                                                    <li>ThreatZero® &nbsp;(For CylancePROTECT®/CylanceOPTICS® clients)</li>
                                                </ul>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section> 
                <section className='threat'>
                    <div class="cylance-mod-t8 content--dark">
                        <div class="cylance-mod-container-headline vCISO-con">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h2 class="cylance-mod-headline">Can your security stack hold up to malicious threat actors without the necessary people, process and technology? Contact BlackBerry Security Services for a consultation and we will help you to uplift your Security!</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <a data-componentmodid="t8" data-ctahhierarchy="primary" class="cta cta-primary no-margin-top" href="/us/en/forms/cylance/handraiser/request-a-consultation" target="_blank">
                                        Contact Us<span class="cta__arrow-icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>          
        </div>
    )
  }
}

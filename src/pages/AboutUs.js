import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Scriptics | About Us</title>
                    <meta name="description"
                        content="Scriptics Technologies Limited, Incorporated in 2015, is a global IT and Analytics Solutions Provider and Product Engineering Company, accredited with ISO 27001 : 2013,ISO 9001 : 2015."/>
                    <body id="page-case-studies" />
                </Helmet> 
                <section className="sec about_page">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className='head-light'>
                                        <h2 className="h2-heading white-color mb-xs-10">About Scriptics</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
                <section className='esg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center'>
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className='text-center'>Our ESG Priorities</h2>
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                    <div class="ripple_hover shadow-box1 zoom_wrap1 bg-jade-light">
                                        <div class="above_div">
                                            <div class="zoom_text"> 
                                                <div class="img_wrap">
                                                    <img src="/assets/img/env.png" alt="Environmental" class="img-responsive" />
                                                </div>
                                                <p><strong class="block mb20 fz-30">Environmental <br/></strong>Serve the preservation of our planet by shaping and sharing technology solutions </p>
                                            </div>
                                        </div>
                                        <span class="ripple_effect"></span>
                                    </div>
                                </div>    
                            
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                    <div class="ripple_hover shadow-box1 zoom_wrap1 bg-sapphire-light">
                                        <div class="above_div">
                                            <div class="zoom_text"> 
                                            <div class="img_wrap"><img src="/assets/img/social.png" alt="Social" class="img-responsive" /></div>
                                            <p><strong class="block mb20 fz-30">Social<br/></strong>Serve the development of people by shaping a future with meaningful opportunities for all </p>
                                        </div>
                                    </div>
                                    <span class="ripple_effect"></span></div>
                                </div>
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                    <div class="ripple_hover shadow-box1 zoom_wrap1 bg-amethyst-light">
                                        <div class="above_div">
                                            <div class="zoom_text">
                                                <div class="img_wrap"><img src="/assets/img/governace.png" alt="Governance" class="img-responsive" /></div>
                                                <p><strong class="block mb20 fz-30">Governance</strong>Serve the interests of all our stakeholders by leading through our core values </p>
                                             </div>
                                        </div>
                                        <span class="ripple_effect"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" about_us" id="about_us">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-right">
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className="h2-heading">About Us</h2>
                                <p className="col-lg-12 col-md-12 col-md-offset-2 col-sm-12 col-xs-12 para-txt light-gray text-center">WE’RE DEVELOPERS, DESIGNERS, DIRECTORS, STRATEGISTS. WE ARE ONE GLOBAL TEAM</p>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-left">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"> <span>400</span></p>
                                    <p className="aboutus-grid-desc">Scriptics employees Worldwide</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-right">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"><span>7</span></p>
                                    <p className="aboutus-grid-desc">Cities with Scriptics locations and operations</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-left">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"> <span>15</span>+</p>
                                    <p className="aboutus-grid-desc">Partners in our ecosystem</p>
                                </div>
                            </div>    
                        </div>
                    </div> 
                </section>
                <section id="know-us" className="know-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center">
                                <h2 className="know-us-head">WE’RE DEVELOPERS, DESIGNERS, DIRECTORS, STRATEGISTS. WE ARE ONE GLOBAL TEAM</h2>
                                <p className="know-us-para">We have over a decade of experience in the creative industry, producing exciting experiences for brands that are as smart, as they are effective.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="team sec">
                    <div className="container">
                       
                    

                            <div id="tabs" className='tabs team_pro'>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-index="0" data-toggle="tab" href="#tab-0" role="tab">Founder</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link white-color" data-index="1" data-toggle="tab" href="#tab-1" role="tab">Board of Directors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link white-color" data-index="2" data-toggle="tab" href="#tab-2" role="tab">Executive Officers</a>
                                    </li>
                                </ul>
                            </div>
                           
                        <div className="tab-content">
                            <div className="tab-pane fade tab-style  active show" id="tab-0" role="tabpanel">
                                <div className='loc_tab founder'>
                                    <div className='col-12 col-lg-12'>
                                        <h2 className=''>Founder</h2>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className='eqh-box'>
                                            <div className='team-img text-center'>
                                                <img src="/assets/img/harsh.png" alt="Harsh Macwan" />
                                            </div>
                                            <div className='team-desc text-center'>
                                            <h4>Harsh Macwan</h4>
                                            <p className="title">CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-1" role="tabpanel">
                                <div className='loc_tab bood row'>
                                    <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
                                        <h2>Board of Directors</h2>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                       
                                            <div className='eqh-box'>
                                                <div className='team-img text-center'>
                                                    <img src="/assets/img/nirav_patel.png" alt="nirav_patel" />
                                                </div>
                                                <div className='team-desc text-center'>
                                                    <h4>Nirav Patel</h4>
                                                    <p className="title">CTO</p>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        
                                            <div className='eqh-box'>
                                                <div className='team-img text-center'>
                                                    <img src="/assets/img/dr.anu.png" alt="dr.anu" />
                                                </div>
                                                <div className='team-desc text-center'>
                                                    <h4>Dr.Anupriya M. MDS, PhD</h4>
                                                    <p className="title">CMO</p>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        
                                            <div className='eqh-box'>
                                                <div className='team-img text-center'>
                                                    <img src="/assets/img/abhilasha_malhotra.png" alt="abhilasha_malhotra" />
                                                </div>
                                                <div className='team-desc text-center'>
                                                    <h4>Abhilasha Malhotra, MBA</h4>
                                                    <p className="title">CPO</p>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        
                                            <div className='eqh-box'>
                                                <div className='team-img text-center'>
                                                    <img src="/assets/img/sachin_bhatia.png" alt="sachin_bhatia" />
                                                </div>
                                                <div className='team-desc text-center'>
                                                    <h4>Sachin Bhatia, M.Tech</h4>
                                                    <p className="title">COO</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-2" role="tabpanel">
                                <div className='loc_tab row exo'>
                                <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
                                <h2>Executive Officers</h2>
                            </div>
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                               
                                    <div className='eqh-box'>
                                        <div className='team-img text-center'>
                                            <img src="/assets/img/s_taposh.png" alt="s_taposh" />
                                        </div>
                                        <div className='team-desc text-center'>
                                            <h4>S. Taposh, PMP</h4>
                                            <p className="title">VP – Global business</p>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                                
                                    <div className='eqh-box'>
                                        <div className='team-img text-center'>
                                            <img src="/assets/img/viral.png" alt="viral" />
                                        </div>
                                        <div className='team-desc text-center'>
                                            <h4>VIRAL BHALIA</h4>
                                            <p className="title">VP - Engineering</p>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                                
                                    <div className='eqh-box'>
                                        <div className='team-img text-center'>
                                            <img src="/assets/img/darpan_patel.png" alt="darpan_patel" />
                                        </div>
                                        <div className='team-desc text-center'>
                                            <h4>Darpan Patel, M.tech</h4>
                                            <p className="title">VP - Software</p>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                                
                                    <div className='eqh-box'>
                                        <div className='team-img text-center'>
                                            <img src="/assets/img/pravesh.png" alt="pravesh" />
                                        </div>
                                        <div className='team-desc text-center'>
                                            <h4>Pravesh Macwan, CPA</h4>
                                            <p className="title">VP - Finance</p>
                                        </div>
                                    </div>
                            </div>
                                          
                                    
                                </div>
                            </div>
                        </div>



                                           
                    </div>
                </section>
                   
                
                <section className='aim'>
                    <div className='container'>
                        <div className='row gx-0 g-0 no-gutters'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center'>
                                <div className='our-purpose hrsh-aim'>
                                    <h2 className="title-sml mb20">“THE SECRET OF CHANGE IS TO FOCUS ALL OF YOUR ENERGY, NOT ON FIGHTING THE OLD, BUT BUILDING ON THE NEW.”</h2>
                                    <p className="para-ovr">HARSH MACWAN</p>
                                    <p>President</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </section>
                  
                <section id="technology-we-follow" className="technology-follow">
                   
                </section>   
                <section id="industry-we-serve" className="indtry-serve">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>INDUSTRIES WE SERVE</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="circle-grid">
                
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_health">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Health</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_chemical">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Chemicals</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_retail">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Retail</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_automative">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Automative</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_dental">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Dental</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_consumer_goods">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Consumer Goods</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_bfsi">
                                    <div className="bg-queries pdg-queries">
                                    <h4>BSFI</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_energy">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Energy</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_oil_and_gas">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Oil and Gas</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_capital_market">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Capital Markets</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_insurance">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Insurance</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> <a href="/industry_media_entertainment">
                                    <div className="bg-queries pdg-queries">
                                    <h4>Media and Entertainment</h4>
                                    <span className="head-abtus-bdr"></span>
                                    <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                    </div>
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
export default AboutUs

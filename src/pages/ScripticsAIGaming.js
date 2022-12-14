import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class ScripticsAIGaming extends Component {
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
                <title>Scritpics | Scriptics AI for Gaming</title>
                <meta name="description" content= "Scriptics AI for Gaming" />
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
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 fadeInUp  Wow from-bottom'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                        
                                    </div>
                                </div>
                            </div> 
                        </div>    
                    </div>
                </div>
            </OwlCarousel>
        </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <h2 className="indus-title_1">Uncover the layers of entertainment with an AI-powered Gaming experience.</h2>
                            </div>
                        </div>
                    </div>
                           
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p>Artificial Intelligence is the real GAME-changer in almost every industrial sector, and the gaming industry is not left behind. AI uses enormous data to form frames, scenarios, and actions in game development. As a result, every touchpoint in the game development process has weaved its magic right from core development to targeting new players and integrating an immersive and matchless customer experience. Thus, it is safe to say the future of the gaming world is in the safest hands.</p>
                                    <p>Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world.</p>
                                    <p>With the help of AI-enabled enterprise platforms, we make targeted development and marketing decisions to develop a cutting-edge and immersive gaming experience. Using the right set of AI-enabled tools, we enable enterprises to deal with customer data, behavior, and foreplay to drive good ROI and sales. Our robust AI-powered gaming services guarantee excellence that amplifies creativity, business capabilities, brand value, and customer experience through our top-notch products and quality services.??</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6  fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/ai_ (1).png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <p className="srv-info">Our in-house team of AI experts is technically proficient in designing and building games with intricate details, character dimensions, graphics, and frames to deploy and market to the customers. We help businesses transform their creative ideas into valuable solutions that comply with their business goals and standards while attaining a secured position in the competitive digital world.</p> 
                                    <h4>Our AI-enable game development services include: </h4>
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
                                    <p>Intelligent characterization of game players to build lively and action-packed characters in the game to increase its engagement value.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>Leveraging AI-powered gaming real-time scenarios for creating 3D characters, graphics, and animations.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>Offering in-depth game analytics and detecting flaws at an early stage to provide an enthralling gaming experience.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>Deriving feedback and real-time insights with the integration of Artificial Intelligence and Machine Learning to improve the gaming experience.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p>Powerful object detection in gaming scenes and levels to empower a surreal gameplay experience for individual and multiple-player games.</p>
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
                                    <p>Develop AI algorithms for 2D and 3D object, language, and sound modeling for generating predictions using user behavior, playing patterns, and devices.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>Automate the video gaming experience with AI-powered devices.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>Create and embed voice commands with AI-enabled voice recognition models for multiplayer action-kicking gaming experience across smart devices and gaming consoles.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>AI-powered player profiling considering player???s traits, styles, behavior, and other characteristic elements</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>Smart pathfinding is the core element, especially in video games, to detect the shortest route between the touchpoints for character development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

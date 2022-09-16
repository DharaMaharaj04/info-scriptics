import React, { Component } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

Modal.setAppElement("#root");

function FullPageScroll() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        className: "slider"
    };  


    return (
        <div>
            <nav className="front_slider">
                <ul className="">
                    <li>
                        <a href="#home" className="dot active" data-scroll="home">
                        <span className='slider_name'>Future<br/>Technology</span></a>
                    </li>
                    <li>
                        <a href="#digital_cap" className="dot" data-scroll="digital_cap">
                            <span className='slider_name'>Digital<br/>Dentistry </span>
                        </a>
                    </li>
                    <li>
                        <a href="#digital_operate" className="dot" data-scroll="digital_operate">
                            <span className='slider_name'>Customer<br/>Service</span>
                        </a>
                    </li>
                    <li>
                        <a href="#talent_lead" className="dot" data-scroll="talent_lead">
                            <span className='slider_name'>Talent<br/> Revolution </span>
                        </a>
                    </li>
                    <li>
                        <a href="#the_next" className="dot" data-scroll="the_next">
                            <span className='slider_name'>Insight</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about_us" className="dot" data-scroll="about_us">
                            <span className='slider_name'>About us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#the_careers" className="dot" data-scroll="the_careers">
                            <span className='slider_name'>Careers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact_us" className="dot" data-scroll="contact_us">
                            <span className='slider_name'>Contact us</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="sec home nav_name" id="home">
                <div className='over_content'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-lg-7 col-md-8 col-sm-12 col-xs-12 fadeInUp animated from-left">
                                <div className='head-light'>
                                    <h1 className="h2-heading white-color mb-xs-10">WE BELIEVE IN A FUTURE WHERE TECHNOLOGY MAKES YOUR WORLD BETTER.</h1>
                                    <Link className="btn btn-shutter-more text-uppercase" to="/works">explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="sec digital_cap nav_name" id="digital_cap">
                <div className='over_content'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-lg-7 col-md-8 col-sm-12 col-xs-12 home_banner fadeInUp animated from-right">
                                <p className="case-cat">Case Studies - AI & Automation</p>
                                <h1 className="h2-heading white-color mb-xs-10">CREATING NEW BENCHMARK FOR DIGITAL DENTISTRY WITH AI WORLD’S FIRST END TO END SOLUTION</h1>
                                <Link className="btn btn-shutter-more text-uppercase" to="/case_study_automation">explore</Link>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec talent_lead nav_name" id="talent_lead">
                <div className="over_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7 col-md-8 col-sm-12 col-xs-12 p0 wow fadeInUp animated from-right appear">
                                <h1 className="home-second-heading white-color mb20 mb-xs-10">KNOWLEDGE IS OF NO VALUE UNLESS YOU PUT IT INTO PRACTICE</h1>
                                <p><em>Embrace the talent revolution to remain relevant in the future.</em></p>
                                <a className="btn btn-shutter-more text-uppercase" href="/works">explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec digital_operate nav_name" id="digital_operate">
                <div className='over_content'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-md-offset-6 col-xs-12"></div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-md-offset-6 col-xs-12 wow fadeInUp animated from-left">
                                <p className="case-cat">Case Studies - BPO</p>
                                <h1 className="home-second-heading white-color mb20 mb-xs-10">WHAT IS SO GOOD ABOUT CUSTOMER SERVICE: SALES FORCE</h1>
                                <a className="btn btn-shutter-more text-uppercase" href="/case_study_bpo">explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec the_next nav_name" id="the_next">
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-right">
                            <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                            <h2 className="h2-heading">Insight</h2>
                        </div>
                    </div>        
                    <div className='row'>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 px-0 wow  fadeInUp animated from-left">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                <div className="content">
                                    <a href="/" title="BEST AI">
                                        <div className="content-overlay"></div>
                                        <img alt="Experience" className="content-image" src="/assets/img/best-ai1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title1">
                                            <h3 className="content-title">BEST AI<br /></h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">With the help of AI-enabled enterprise platforms, we make targeted development and marketing decisions to develop a cutting-edge.</span> 
                                            </p>
                                        </div>       
                                    </a> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 px-0 wow fadeInUp animated from-right">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                <div className="content"> 
                                    <a href="/" title="GAMING DEVELOPING">
                                    <div className="content-overlay"></div>    
                                        <img alt="Insight" className="content-image" src="/assets/img/game-dev1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title2">
                                            <h3 className="content-title">GAMING DEVELOPING<br /></h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world.</span> 
                                            </p>
                                        </div>       
                                    </a> 
                                </div>    
                            </div>
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                <div className="content">    
                                    <a href="/" title="APPLICATION DEVELOPMENT"> 
                                    <div className="content-overlay"></div>       
                                        <img alt="Innovate" className="content-image" src="/assets/img/product-dev1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title3">
                                            <h3 className="content-title">APPLICATION DEVELOPMENT<br /></h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">We offer a suite of application development services and custom solutions on various platforms which help you achieve strategic IT and business objectives.</span> 
                                            </p>
                                        </div>       
                                    </a> 
                                </div>        
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 px-0 wow fadeInUp animated from-left">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                <div className="content">            
                                    <a href="/" title="Accelerate"> 
                                    <div className="content-overlay"></div>           
                                        <img alt="Accelerate" className="content-image" src="/assets/img/application.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title4">
                                            <h3 className="content-title">PRODUCT DEVELOPMENT</h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">We provide all the expertise and innovation you need to compete in your market of choice. We enable application availability without downtime or interruption.</span> 
                                            </p>
                                        </div>           
                                    </a>
                                </div>         
                            </div>
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                <div className="content">           
                                    <a href="/" title="Assure">
                                    <div className="content-overlay"></div>        
                                        <img  alt="Assure" className="content-image" src="/assets/img/product-main1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title5">
                                            <h3 className="content-title">PRODUCT MAINTENANCE</h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">As a software application development, maintenance and support expert, Scriptics provides services designed to support our clients as their business grows and changes.</span> 
                                            </p>
                                        </div>       
                                    </a> 
                                </div>
                            </div>    
                        </div>
                    </div>   
                    <div className="row expand_sec">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <h3>Service</h3>
                            <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal1"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                        </div> 
                    
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <h3>Industries</h3>
                            <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal2"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                            
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <h3>Platform</h3>
                            <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal3"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>

                        </div>
                   
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                            <h3>cloud</h3>
                            <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal4"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                        </div>
                        
                        <div className="modal fade" id="largeModal1" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                            <div className="modal-dialog"> 
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>  
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>            
                                                                
                                            <h3>SCRIPTICS, MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE LEVERAGES THE BEST TOOLS AND LEARNINGS THE BEST TOOLS,</h3>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                            <h3>TALENTED AND DEDICATED TEAM, BRINGS YOU COLSER TO THE FUTURE.</h3>
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience. Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes.</p>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive set of solutions right from development to maintenance by employing the right set of platforms, tools, and languages. We allow our clients to uncover new processes and adapt to the trends in volatile business scenarios and demands. With our exemplary deep learning services, business capabilities.</p>          
                                
                                        </div>  
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="modal fade" id="largeModal2" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                            <div className="modal-dialog"> 
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>  
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>            
                                                                
                                            <h3>SCRIPTICS, MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE LEVERAGES THE BEST TOOLS AND LEARNINGS THE BEST TOOLS,</h3>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                            <h3>TALENTED AND DEDICATED TEAM, BRINGS YOU COLSER TO THE FUTURE.</h3>
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience. Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes.</p>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive set of solutions right from development to maintenance by employing the right set of platforms, tools, and languages. We allow our clients to uncover new processes and adapt to the trends in volatile business scenarios and demands. With our exemplary deep learning services, business capabilities.</p>          
                                
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div className="modal fade" id="largeModal3" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                            <div className="modal-dialog"> 
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>  
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>            
                                                                
                                            <h3>SCRIPTICS, MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE LEVERAGES THE BEST TOOLS AND LEARNINGS THE BEST TOOLS,</h3>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                            <h3>TALENTED AND DEDICATED TEAM, BRINGS YOU COLSER TO THE FUTURE.</h3>
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience. Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes.</p>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive set of solutions right from development to maintenance by employing the right set of platforms, tools, and languages. We allow our clients to uncover new processes and adapt to the trends in volatile business scenarios and demands. With our exemplary deep learning services, business capabilities.</p>          
                                
                                        </div>  
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="modal fade" id="largeModal4" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                            <div className="modal-dialog"> 
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>  
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>            
                                                                
                                            <h3>SCRIPTICS, MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE LEVERAGES THE BEST TOOLS AND LEARNINGS THE BEST TOOLS,</h3>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                            <h3>TALENTED AND DEDICATED TEAM, BRINGS YOU COLSER TO THE FUTURE.</h3>
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience. Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes.</p>
                                            <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive set of solutions right from development to maintenance by employing the right set of platforms, tools, and languages. We allow our clients to uncover new processes and adapt to the trends in volatile business scenarios and demands. With our exemplary deep learning services, business capabilities.</p>          
                                
                                        </div>  
                                    </div>
                                </div>
                            </div>             
                        </div>             
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 wow fadeInUp animated from-left'>
                            <div className='down_wrapper'>
                                <div className='down_img'>
                                    <img src='/assets/img/americas-lead.jpg' />
                                </div>
                            </div>
                            <div className='desc_wrapper'>
                                <h4>LEADERSHIP THOUGHT AT<br /> SCRIPTICS TECHNOLOGIES</h4>
                                <em>Scriptics is one of the leading deep learning companies that focus on the development<br/> of enterprise solutions with the combination of artificial intelligence and machine learning.</em>
                            </div>
                        </div>    
                    </div> 
                    <div className='row gx-0 g-0 no-gutters'>
                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center'>
                            <div className='our-purpose'>
                                <h2 className="title-sml mb20">Our Purpose:</h2>
                                <p className="para-ovr pt0 fontweight600">To deliver on the promise of technology and human ingenuity.We embrace the power of change to create long-lasting value in every direction for our clients, people and communities.</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
            <section className="sec about_us nav_name" id="about_us">
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
                    <div className='row'>    
                        <div className='col-12 col-lg-5 col-md-12 col-sm-12 col-xs-12 news px-0 ctrl-width-mob wow fadeInUp animated from-right'>
                            <div className='col-eq-ht bg-yellow'>
                                <div className='new_padd'>
                                    <h2>In the news</h2>
                                    <div className='pro_news'>
                                        <h4 className='news-desc'>
                                            Scriptics starting with new country- "Australia"
                                            <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></h4>
                                    </div>
                                    <div className='pro_news'>
                                        <h4 className='news-desc'>
                                        The Millets Meetup. Organic - Chemical Free Food - Vegan & Health Eating Community.
                                            <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></h4>
                                    </div>
                                    <div className='pro_news'>
                                        <h4 className='news-desc'>
                                            Invest Ontario and Toronto Business Development Centre supports to Scriptics for future development.
                                            <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></h4>
                                    </div>
                                    <div className='pro_news'>
                                        <h4 className='news-desc'>
                                        Scriptics will be attending at Collision Conf in Toronto 2022.
                                            <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></h4>
                                    </div>
                                    <div className='pro_news'>
                                        <h4 className='news-desc'>
                                        Scriptics, #ICYMI unlocking global market opportunities for startups with T-Hub.
                                            <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></h4>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 px-0 wow fadeInUp animated from-right">
                            <div className='row col-eq-ht no-gutters'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="new_in"> 
                                        <a href="/" title="Insight">
                                          
                                            <img alt="Insight" className="content-image" src="/assets/img/strategy.jpg" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">STRATEGY<br /></h3>
                                            </div>      
                                        </a>   
                                    </div>
                                </div>        
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="new_in">    
                                        <a href="/" title="Innovate">        
                                            <img alt="Innovate" className="content-image" src="/assets/img/technology.jpg" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">TECHNOLOGY<br/></h3>    
                                            </div>       
                                        </a> 
                                    </div>        
                                </div>
                           
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="new_in">            
                                        <a href="/" title="Accelerate">           
                                            <img alt="Accelerate" className="content-image" src="/assets/img/ai-game.jpg" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">AI FOR GAMING</h3>    
                                            </div>           
                                        </a>
                                    </div>           
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                    <div className="new_in">           
                                        <a href="/" title="Assure">       
                                            <img  alt="Assure" className="content-image" src="/assets/img/consult.jpg" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title"> CONSULTING<br /></h3>    
                                            </div>       
                                        </a> 
                                    </div>
                                </div>    
                            </div>    
                        </div>
                    </div>
                </div> 
            </section>
            <section className="sec the_careers nav_name" id="the_careers">
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-left">
                            <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                            <h2 className="h2-heading">careers</h2>
                            <p className="col-lg-12 col-md-12 col-md-offset-2 col-sm-12 col-xs-12 para-txt light-gray text-center">We have over a decade of experience in the creative industry, producing exciting experiences for brands that are as smart, as they are effective.</p>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center wow fadeInUp animated from-right'>
                            <div className='career_opt'>
                                <img src='/assets/img/disrupting-core-platform-economy.png'/>
                            </div>
                            <div className='careers-employeespeak'>
                                <h5 className="employeespeak-head text-uppercase">WHAT OUR PEOPLE SAY</h5>
                                <Slider {...settings}>
                                    <div className="slide1">
                                        <img src="/assets/img/user-400-3.jpg" alt="strategy featuremedia" className='img-employee'/>
                                        < em className='employeespeak-content'>"I joined Scriptics because of the excellent hands-on training." <br/> <br/>-Dhara Maharaj </em>                                                                                           
                                    </div>
                                    <div className="slide2">
                                        <img src="/assets/img/user-400-6.jpg" alt="strategy featuremedia" className='img-employee'/>
                                        <em className='employeespeak-content'>"I'm most excited about the opportunity to grow at Scriptics." <br /><br /> -Parthvi Patel</em>                                                                                           
                                    </div>
                                    <div className="slide2">
                                        <img src="/assets/img/user-400-2.jpg" alt="strategy featuremedia" className='img-employee'/>
                                        <em className='employeespeak-content'>"Scriptics is on an Amazing journey of transformation" <br /><br /> -Nidhi</em>                                                                                           
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center wow fadeInUp animated from-right'>    
                            <h4 className='careere_tlt'>Find Career opportunities </h4>
                            <a className="btn  text-uppercase career_btn" href="/aboutus#career">Explore Careers</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec contact_us nav_name" id="contact_us">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 mb-sm-40">
                                    <div className='border'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 px-0 col-xs-12 border-rgt border-rgt-xs border-btm p0'>
                                            <div className='expan_contact'>
                                                <a className='cntry-nme' href='/contact/#locate_us'>Canada</a>
                                            </div>
                                            <hr className='cntry-line'/>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0  border-btm p0'>
                                            <div className='expan_contact'>
                                                <a className='cntry-nme' href='/contact/#locate_us'>Asia Pacific</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-sm-40 px-0">
                                    <div className='border'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 border-rgt border-rgt-xs border-btm p0'>
                                            <div className='expan_contact'>
                                                <a className='cntry-nme' href='/contact/#locate_us'>Middle East and Africa</a>
                                            </div>
                                            <hr className="cntry-line"/>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  border-rgt border-rgt-xs border-btm p0'>
                                            <div className='expan_contact'>
                                                <a className='cntry-nme' href='/contact/locate_us'>Australia</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg col-md'></div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center over_content">
                            <h2 className='cnt_us_txt white-color mb30'>STAY IN WITH OUR NEWSLETTER</h2>
                            <a className="btn  text-uppercase career_btn" href="/contact/#subscribe-newsletter">Contact Us</a>
                        </div>
                    </div>    
                </div>
            </section>        
        </div>
    )

}

export default FullPageScroll
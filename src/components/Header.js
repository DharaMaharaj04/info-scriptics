import React from 'react';
function Header() {
    return (
            <header id="masthead" className="site-header navbar-static-top navbar-light masthead-sticky ">
                <div className="container">
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <a className="navbar-brand" href="/"><img src="/assets/img/scriptics_wht_bg.svg" alt="scriptics logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav end">   
                                <li className="nav-item drop-down">
                                    <a id="he_services" className="nav-link dropdown-toggle header-link" href="/" data-toggle="dropdown" aria-expanded="false">Services</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/ai_automation">Ai & Automation</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/statistical_data_analysis">Statistical Data Analytics</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/business_intelligence">Business Intelligence</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul> 
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/computer_vision">Computer vision</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/big_data_analysis">Big data analytics</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/natural_language_processing">Natural Language processing</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/deep_learning">Deep learning</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/scriptics_ai_gaming">Ai for Gaming</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/signal_processing">Digital Signal Processing </a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/cybersecurity"> BlackBerry Cyber Security</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/soc">SOC</a></li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>    
                                </li>
                                <li className="nav-item drop-down">
                                    <a id="he_industries" className="nav-link dropdown-toggle header-link " href="/" data-toggle="dropdown" aria-expanded="false">Industries</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/industry_health">Health</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/industry_checmical">Chemicals</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/industry_retail">Retail</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul> 
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_automative">Automative</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_dental">Dental</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_consumer_goods">Consumer Goods</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_bfsi">BFSI</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_energy">Energy</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_oil_and_gas">Oil and Gas</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_capital_market">Capital Markets</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_insurance">Insurance</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_media_entertainment">Media and Entertainment</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                </ul>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                </li>
                                <li className="nav-item drop-down">
                                    <a className="nav-link dropdown-toggle header-link" href="/" data-toggle="dropdown" aria-expanded="false">About Scriptics</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="container">
                                            <div className="col-md-12 col-sm-12 col-xs-6">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">
                                                        <h2 className="about-head">about scriptics</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#know-us">Know Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/case-studies">Case Studies</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-seprator">
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">                                           
                                                        <h2 className="about-head">Our structure</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#work-stratery">Work Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#technology-we-follow">Technologies we follow</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#industry-we-serve">Industries we serve</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-seprator"></div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">
                                                        <h2 className="about-head">Discover us</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact">Contact Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#locate_us">Locate Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#subscribe-newsletter">Subscribe to newsletter</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item drop-down">
                                    <a id="he_services" className="nav-link dropdown-toggle header-link" href="/" data-toggle="dropdown" aria-expanded="false">Cloud Services</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/thinkbox_studio">Thinkbox Studio</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/devops">DevOps</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/data_engineering_and_analytics">Data Engineering & Analytics</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul> 
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/aws_elemental">AWS Elemental</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/amazon_elastic_kubernetes_service">Amazon EKS</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/amazon_relational_database_service">Amazon Relational Database Service</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/migration">Migration</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/machine_learning">Machine Learning</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/amazon_quicksight">Amazon QuickSight</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/aws_control_tower">AWS Control Tower</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/microsoft_on_aws">Microsoft Workloads</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/application_modernization">Application Modernization</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/"></a></li>
                                                    </ul>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>    
                                </li>
                                <li className=''>
                                    <div className="box ">
                                        <form name="search"><input type="text"  name="txt" className='input'/></form>
                                        <i className="fa fa-search"></i>
                                    </div>
                                </li>           
                            </ul>
                            <div className="header-social col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                <ul className="social-icon">
                                    <li className="social-twitter"><a href="https://twitter.com/scripticstech/"><i className="fa fa-twitter-square fa-2x"></i></a></li>
                                    <li className="social-facebook"><a href="https://www.facebook.com/scripticsinc"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                                    <li className="social-linkedin"><a href="https://in.linkedin.com/company/scripticstechs"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            
    )
}

export default Header

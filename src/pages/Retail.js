import React from 'react';
import { Helmet } from 'react-helmet'
function Retail() {
    return (
        <div className="industries-page">
            <Helmet>
            <title>Scritpics | Retail</title>
            <meta name="description"  content />
            <body id="page-industry" className="industry-health"/>
            </Helmet>
            <div className="spacer"></div>
            <section className="srv-main">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-lg-10">
                            <h3 className="indus-cat">industries</h3>
                            <h2 className="">Retail</h2>
                            <div className="indus-excerpt">
                                <p>Creating  ‘ME’aningful experiences to enhance customer journeys in today’s digital world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="srv-img" style={{background:`url(/assets/img/indus_banner.png) no-repeat`}}>
            </section>
            <section className="srv-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="indus-info">
                                <h2 className="indus-title_1">Purpose-Driven. Resilient. Adaptable.</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <div className="indus-info">
                            <p>The retail industry is witnessing a paradigm shift. Rapidly evolving technologies, changing customer expectations, and emerging digital firms are driving widespread disruption. Clearly, from a plethora of new products, markets, and customer segments to the burgeoning expansion of sales and marketing channels (like mobile and social commerce), retail is at a tipping point. Customers are now demanding rich shopping experiences that are personalized, hyper-connected, and engaging. Additionally, several forces are revolutionizing the landscape: the explosion of data and connected devices, software defined infrastructure, cloud enabled as-a-service and experience, and outcome-driven digital platforms. This makes it imperative for retailers to showcase agility in tech adoption and business process optimization.</p>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <p className="indus-info">In fact, 21 CE organizations are recognized by five key tenets: experience-centricity, outcome-based, agile and lean-focused, service-oriented, and ecosystem-driven. We provide following services:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="srv-level">
                <div className="container">
                    <div className="row">
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                <p>Our Digital & Analytics services helps design and build key platform components of customers’ Digital-Technology-Footprint to power the Digital transformation journey. </p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <p>At IoT WoRKS we help create entirely new services that deliver measurable business outcomes. These experience will have an increasing role in differentiating enterprises </p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <p>Our Applications business is structured, allowing us to offer clients a full lifecycle of systems integration consulting services and a unified approach to developing the right solutions for their business needs.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <p>Artificial intelligence-driven automation platform. It consists of machine learning components, automation modules, orchestration components, well-proven monitoring tools, knowledge management, and a reporting layer.</p>
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
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                    <p>AI-powered data core to deliver insights: Competencies to build a digital foundation that vastly outperforms competition through game changing organizational capabilities by reimagining the core processes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>Portfolio Health  Review: We track following key matrices month over month/year over year bases for credit card product (Overall as well as DM v/s Non DM; By Card type, Month on book, By customer segment. </p>
                                </div>
                            </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>Segmentation: We help businesses segment/group their current and/or new customer bases into specialized smaller groups that are distinct in their needs, demographics and behavior. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Retail

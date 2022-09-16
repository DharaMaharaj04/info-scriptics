import React from 'react'
import { Helmet } from 'react-helmet'
function OilAndGas() {
    return (
        <div className="industries-page">
            <Helmet>
            <title>Scritpics |  Oil and Gas</title>
            <meta name="description"  content />
            <body id="page-industry" className="industry-health"/>
            </Helmet>
            <div className="spacer"></div>
            <section className="srv-main">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-lg-10">
                            <h3 className="indus-cat">industries</h3>
                            <h2 className=""> Oil and Gas</h2>
                            <div className="indus-excerpt">
                                <p>Gain control over an uncertain future by leveraging innovative technology with flexible business models.</p>
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
                                <h2 className="indus-title_1"> Being Resilient. That’s Live Enterprise. Navigate your next in Oil and Gas</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                        <div className="indus-info">
                            <p>Your oil and gas enterprise needs to be rewired to become increasingly agile and responsive to shifts in business and technology, as well as unforeseen events. A digital-first enterprise pivots strategy and operations appropriately with enhanced visibility into the business landscape and enterprise ecosystem.</p>
                           <p>Scriptics partners with oil, gas, petrochemical, and oil field services enterprises to develop a sentient enterprise that senses and responds to dynamic shifts. The upstream business accelerates discovery of hydrocarbons and optimizes ongoing drilling operations. The midstream business ensures predictability while undertaking proactive pipeline network maintenance. The downstream business ensures consistent ‘last mile’ outperformance.</p>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <img className="srv-con-img" src="/assets/img/indus_content.png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                        </div>
                        <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                            <div className="srv-info">
                                <p className="indus-info">Scriptics helps oil and gas enterprises navigate the dynamic landscape and become more resilient with the Live Enterprise framework –</p>
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
                                <p>We helps oil and gas enterprises migrate legacy infrastructure, data and applications to the cloud. Our cloud ecosystem enables maximum availability and superior performance across the oil and gas value chain.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <p>We adopts a data-first approach to operational excellence.We safeguard oil and gas assets with holistic cybersecurity solutions and exception-based alarm systems.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <p>We creates synergies and streamlines workflows within and across upstream, midstream and downstream operations of oil and gas enterprises.</p>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <p>We transforms the oil and gas enterprise into a digital workplace with Wingspan, our mobile- and cloud-first learning platform. It enables customized training for the digital workforce, including geoscientists, geologists, reservoir engineers, rig and drilling operations managers, and quality control specialists.</p>
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
                                    <p>Our expertise in engineering can cater to diverse product engineering needs of the O&G industry, including products for subsea systems, drilling, turbomachinery, and sensing and measurement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>We optimize assets through system wide sensors on an Industrial Internet of Things (IIoT) platform</p>
                                </div>
                            </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>We leverage the expertise in E&P data management, DQM and analytics practice to deliver end to end data solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OilAndGas

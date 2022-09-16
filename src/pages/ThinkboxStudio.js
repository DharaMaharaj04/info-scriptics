import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class ThinkboxStudio extends Component {
    render() {
        return (
            <div className="service-page">
            <Helmet>
                <title>Scritpics | Thinkbox Studio</title>
                <meta name="description" content= "Thinkbox Studio" />
                <body id="page-cloud" />
            </Helmet>
                <div className="spacer"></div>
                <section className="srv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6">
                                <h3 className="srv-cat">Cloud Services</h3>
                                <h2 className="">Thinkbox Studio</h2>
                                <div className="srv-excerpt">
                                    <p>Your studio, no limits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="srv-info">
                                    <p className="srv-info">Unleashing the power of cloud computing on AWS to creative studios.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info">
                                    <p>Studios Instantly Benefit from the Cloud.</p>
                                    <p>Scriptics partnered with Amazon Web Services (AWS) to enable creative studios with the ability to scale rendering workloads, host virtual workstations for artists and editors, and store workloads for hybrid or full cloud pipelines</p>
                                    <p>Through HPC Content Creation solutions and AWS consulting, studios can accelerate time-to-market, automate results, shorten cloud adoption time, reduce risk and receive answers fast.</p>
                                    <p>Scriptics empowers VFX Studios with virtually limitless cloud resources.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center cloud_title">Digital Content Creation on AWS</h3>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Virtual Workstations</h3>
                                    <p>Take on more projects while expanding your workforce with Virtual Workstations. Scale creative talent for a specific project and timeframe using Amazon Elastic Compute Cloud (EC2) G4 instances.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">AWS’s Global Footprint</h3>
                                    </div>
                                    <p>Tap new talent pools from virtually anywhere in the world. AWS’s innovations enable consistently high performance from your studio with the latest software and hardware.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Cloud Rendering</h3>
                                    </div>
                                    <p>Using the cloud for rendering workloads equals less time waiting for them to finish.<br/>Artists spend more time creating. Rendering on AWS provides you with unparalleled flexibility.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Cloud Storage Solutions</h3>
                                    </div>
                                    <p>AWS delivers the best solutions for data storage and transfer. Utilizing cloud storage for virtual workstations keeps your assets flexible with the ability to archive or render when you want.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Training and Enablement</h3>
                                    </div>
                                    <p>Deadline is a render management solution created by Thinkbox Software to help customers</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Render Farm Deployment KIT (RFDK)</h3>
                                    </div>
                                    <p>With RFDK, use your preferred programming languages such as Python, to build, customize, and deploy your render farm on AWS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

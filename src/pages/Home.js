import React, { Component } from 'react';
import FullPageScroll from './FullPageScroll';

import { Helmet } from 'react-helmet';
export class Home extends Component {
    render() {
        
        return ( 
            <div>
                <Helmet>
                    <title>Scriptics | Technology that delivers on your promise</title>
                    <meta name="description"
                          content="Scriptics Technologies Limited, Incorporated in 2015, is a global IT and Analytics Solutions Provider and Product Engineering Company, accredited with ISO 27001 : 2013,ISO 9001 : 2015."
                    />
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@Scripticstech"/>
                    <meta name="twitter:title" content="Scriptics | Technology that delivers on your promise"/>
                    <meta name="twitter:description" content="Scriptics Technologies Limited, Incorporated in 2015, is a global IT and Analytics Solutions Provider and Product Engineering Company, accredited with ISO 27001 : 2013,ISO 9001 : 2015."/>
                    <meta name="twitter:creator" content="@Scripticstech"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Scriptics | Technology that delivers on your promise"/>
                    <meta property="og:description" content="Scriptics Technologies Limited, Incorporated in 2015, is a global IT and Analytics Solutions Provider and Product Engineering Company, accredited with ISO 27001 : 2013,ISO 9001 : 2015."/>
                    <meta property="og:image" content="https://www.scriptics.ai/assets/img/og_meta.png"/>
                    <meta property="og:url" content="https://www.scriptics.ai/"/>
                    <meta name="twitter:image" content="https://www.scriptics.ai/assets/img/1674040738302.png" />
                    <meta name="twitter:domain" content="scriptics.ai"/>
                    <body id="page-home" />
                </Helmet>
                <section>
                    <FullPageScroll />
                </section> 
        </div>
        )
    }
}
export default Home

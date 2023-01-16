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

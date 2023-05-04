import React, { Component } from 'react';
import FullPageScroll from './FullPageScroll';

import { Helmet } from 'react-helmet';
export class Home extends Component {
    render() {
        
        return ( 
            <div>
                <Helmet>
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

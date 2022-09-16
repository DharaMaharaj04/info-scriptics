import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FullPageScroll from './FullPageScroll';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
export class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            className: "front_slider"
        };  
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

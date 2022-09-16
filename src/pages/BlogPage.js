import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Helmet } from 'react-helmet';
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: ['<div class="case-nav-group">Previous<i><img class= "nav-img" src="/assets/img/white-right-arrow.png" alt="white-right-arrow-icon"/></i></div>', '<div class="case-nav-group">Next<i><img class= "nav-img" src="/assets/img/white-right-arrow.png" alt="white-right-arrow-icon"/></i></div>'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    },
};
export class BlogPage extends Component {
    state ={ blog: {}, blog_title: {}, isLoaded: false }
    componentDidMount(){
        const blog = axios.get( `https://blog.scriptics.ai/wp-json/wp/v2/blogs/${this.props.match.params.id}`);
        const blog_title = axios.get('https://blog.scriptics.ai/wp-json/wp/v2/blogs');
        Promise.all([blog, blog_title]).then(res =>{
            this.setState({ blog: res[0].data, blog_title: res[1].data, isLoaded: true });
        });
    }
    render() {
        const {blog,blog_title, isLoaded} =this.state;
        console.log(blog);
        if(isLoaded){
            return (
                <div>
                <Helmet>
                <title>Scritpics | {`${blog.title.rendered}`}</title>
                <meta name="description" content={`${blog.title.rendered}`}/>
                <body id="page-case-sudy" />
                </Helmet>
                    <section className="case-study-inner" style={{background:`url(${blog.acf.banner_image}) no-repeat`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-3 col-md-4 col-lg-4 cs-main">
                                    <p className="case-cat">Case Studies - AI & Automation</p>
                                    <h2 className="title-txt cs">{blog.title.rendered}</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Overview</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt" dangerouslySetInnerHTML={{ __html: blog.acf.overview }}></p>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study-art">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 cs-left">
                                    <img src={blog.acf.left_image} alt="case study left featuremedia"/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                                    <img src={blog.acf.right_image} alt="case study right featuremedia"/>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Problem & Solution</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt" dangerouslySetInnerHTML={{ __html: blog.acf.problem_solution }}></p>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study-art">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 cs-left">
                                    <img src={blog.acf.left_image} alt="case study left featuremedia"/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                                    <img src={blog.acf.right_image} alt="case study right featuremedia"/>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className="case-study">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                    <h2 className="title-txt cs">Technologies involved</h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                    <p className="para-txt" dangerouslySetInnerHTML={{ __html:blog.acf.technologies_involved }}></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="case-study-nav">
                        <div className="container">
                            <OwlCarousel className="owl-theme" {...options}>
                                {blog_title.map(( name,i)=>(
                                    <div className="item" key={i}>
                                        <p className="case-cat">Case Studies - {name.acf.service}</p>
                                        <Link to={`/case-study/${name.id}`} target="_blank"><h2 className="title-txt nav-case-title">{name.title.rendered}</h2></Link>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>  
                    </section>      
                </div>
            )
        }   
        return null;
    }
}
export default BlogPage
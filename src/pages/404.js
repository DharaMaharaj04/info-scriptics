import React, { Component } from 'react';
export class Page404 extends Component {
    render() {
        return (
            <div className="container-fuild">
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h2>4<span>0</span>4</h2>
                        </div>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <a href="/">Home Page</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page404

import React, { Component } from 'react';
import './banner.css';

class banner extends Component {
    render() {
        return (
            <div className="banner">
                <h1>{this.props.bannerText}</h1>
            </div>
        );
    }
}


export default banner;
import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';

class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="main">

                </div>
                <div className="sidebar">
                   <Sidebar explore={false}/> 
                </div>
            </div>
        );
    }
}

export default Home;
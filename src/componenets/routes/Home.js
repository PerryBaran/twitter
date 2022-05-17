import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import topStyle from '../styles/topbar.module.css';

class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="main">
                    <Main />
                </div>
                <div className="sidebar">
                   <Sidebar explore={false}/> 
                </div>
            </div>
        );
    }
}

const Main = (props) => {
    return (
        <div>
            <Topbar />
        </div>
    )
}

const Topbar = (props) => {
    return (
        <div>
            <div className={topStyle.topbar}>
                <h1 className={topStyle.justHeading}>Home</h1>
            </div>
            <div className={topStyle.empty} />
        </div>
    )
}

export default Home;
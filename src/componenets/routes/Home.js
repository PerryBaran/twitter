import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import topStyle from '../styles/topbar.module.css';
import style from '../styles/home.module.css';

//temp image
import pic from '../../images/logo.png';

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
            <Tweet />
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

const Tweet = (props) => {
    const autoSizeTextarea = (e) => {
        e.target.style.height = '50px'
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <div className={style.tweet}>
            <div className={style.profileImg}>
                <img alt='' src={pic}/>
            </div>
            <form className={style.composeTweet}>
                <textarea placeholder="What's Happening?" onKeyDown={autoSizeTextarea} maxLength='280'/>
                <button>Tweet</button>
            </form>
        </div>
    )
}


export default Home;
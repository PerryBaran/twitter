import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import Feed from '../Feed.js';
import topStyle from '../styles/topbar.module.css';
import style from '../styles/home.module.css';
import uniqid from 'uniqid';

//temp image for styling
import pic from '../../images/logo.png';

//temp tweet info for styling
const fakeTweet = [
    {user:{name:'PlaceHolder', handle:'placeholder', pic:pic}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:pic, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:pic}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:pic}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:pic}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:pic}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
]

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
            <ComposeTweet />
            <Feed tweets={fakeTweet}/>
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

const ComposeTweet = (props) => {
    const autoSizeTextarea = (e) => {
        e.target.style.height = '50px'
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <div className={style.composeTweetContainer}>
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
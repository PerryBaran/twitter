import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
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

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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

const Feed = (props) => {
    const {tweets} = props
    return (
        <div>
            {tweets.map((post => {
                return <Post tweet={post} key={post.key}/>
            }))}
        </div>
    )
}

const Post = (props) => {
    const {tweet} = props

    const currentTime = new Date();
    const postTime = tweet.time;
    const timePassed = currentTime - postTime; //time in ms
    let time = '';
    if (timePassed > 86400000) { //days
        time = `${months[postTime.getMonth()]} ${postTime.getDate()}`;
    } else if (timePassed > 3600000) { //hours
        time = `${Math.floor(timePassed / 3600000)}h`;
    } else if (timePassed > 60000 ) { //mins
        time = `${Math.floor(timePassed / 60000)}m`;
    } else if (timePassed > 1000) {  //seconds
        time = `${Math.floor(timePassed / 1000)}s`;
    } else { //now
        time = 'now';
    }

    return (
        <div className={style.tweet}>
            <div className={style.profileImg}>
                <img alt='' src={tweet.user.pic}/>
            </div>
            <div className={style.userInfo}>
                <h2>{tweet.user.name}</h2>
                <h3>{tweet.user.handle}</h3>
                <time>{time}</time>
            </div>
            <div className={style.content}>
                <p>{tweet.content.text}</p>
                {tweet.content.img && 
                    <div className={style.postImg}>
                        <img src={tweet.content.img} alt=''/>
                    </div>
                }
            </div>
        </div>
    )
}


export default Home;
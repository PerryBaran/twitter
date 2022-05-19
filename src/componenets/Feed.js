import React from 'react';
import style from './styles/feed.module.css';
import imgStyle from './styles/home.module.css';

//images
import reply from '../images/reply.png';
import retweet from '../images/retweet.png';
import like from '../images/like.png';
import share from '../images/share.png';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
            <div className={imgStyle.profileImg}>
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
            <div className={style.tweetBottom}>
                <div className={style.actions}>
                    <div className={style.icon}>
                        <img alt='' src={reply}/>
                    </div>
                    <p className={style.amount}>3</p>
                </div>
                <div className={style.actions}>
                    <div className={style.icon}>
                        <img alt='' src={retweet}/>
                    </div>
                    <p className={style.amount}>2</p>
                </div>
                <div className={style.actions}>
                    <div className={style.icon}>
                        <img alt='' src={like}/>
                    </div>
                    <p className={style.amount}>5</p>
                </div>
                <div className={style.actions}>
                    <div className={style.icon}>
                        <img alt='' src={share}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;
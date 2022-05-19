import React from 'react';
import Sidebar from '../Sidebar.js';
import Feed from '../Feed.js';
import topStyle from '../styles/topbar.module.css';
import style from '../styles/profile.module.css';
import months from '../months.js';
import uniqid from 'uniqid';

//images
import back from '../../images/back.png';
import messages from '../../images/messages.png';
import location from '../../images/location.png';
import calendar from '../../images/calendar.png';

//fake profile
const profile = {
    name: 'Placeholder',
    handle: 'placehldr',
    pic: messages,
    cover: back,
    location: 'London, UK',
    joined: new Date(),
    bio: 'I make “narrative reviews” of video games on YouTube. Ruthenian. Anarcho-lib. Powerlifter. ASD.',
    following: [
        'stevdfsdfsdge', 'migfdgke', 'dkjfafddfhve' //have this be a list of reference ids that can be used to get follower info??
    ],
    followers: [
        'fdsf', 'rauifd', 'sdfisdf', 'odfjsdiofds', 'dosfjdsifn', 'odsfjsdi'
    ],
}

//temp tweet info for styling
const fakeTweet = [
    {user:{name:'PlaceHolder', handle:'placeholder', pic:back}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:back, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:back}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:back}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:back}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
    {user:{name:'PlaceHolder', handle:'placeholder', pic:back}, time:new Date(), content:{text:'placeholder text on my placeholder tweet I am making a placeholder, lots of text lots of tweet not enough placeholder wwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwww wwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', img:undefined, ref:false}, key:uniqid()},
]

function Profile(props) {
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

const Main = (props) => {
    return (
        <div>
            <Topbar name={profile.name} tweets={'10'}/>
            <ProfileInfo profile={profile}/>
            <Feed tweets={fakeTweet}/>
        </div>
    )
}

const Topbar = (props) => {
    const {name, tweets} = props
    return (
        <div>
            <div className={topStyle.topbar}>
                <div className={topStyle.back}>
                    <img alt='' src={back}/>
                </div>
                <div className={topStyle.info}>
                    <h1>{name}</h1>
                    <p>{tweets} Tweets</p>
                </div>
            </div>
            <div className={topStyle.empty} />
        </div>
    )
}

const ProfileInfo = (props) => {
    const {profile} = props

    const date = profile.joined;
    const joined = `${months[date.getMonth()]} ${date.getFullYear()}`;

    const following = profile.following.length;
    const followers = profile.followers.length;

    return (
        <div className={style.container}>
            <div className={style.coverImg}>
                <img alt='' src={profile.cover}/>
            </div>
            <div className={style.profileImg}>
                <img alt='' src={profile.pic}/>
            </div>
            <div className={style.contentContainer}>
                <div className={style.buttons}>
                    <button className={style.ellipses}>
                        <div>...</div>
                    </button>
                    <button className={style.buttonImg}>
                        <img alt='' src={messages}/>
                    </button>
                    <button className={style.follow}>Follow</button>
                </div>
                <div className={style.names}>
                    <h2>{profile.name}</h2>
                    <h3>{profile.handle}</h3>
                </div>
                <p className={style.bio}>{profile.bio}</p>
                <div className={style.moreInfo}>
                    {profile.location &&
                    <div>
                        <div className={style.icon}>
                            <img alt='' src={location}/>
                        </div>
                        <p className={style.text}>{profile.location}</p>
                    </div>
                    }
                    <div>
                        <div className={style.icon}>
                            <img alt='' src={calendar}/>
                        </div>
                        <p  className={`${style.text} ${style.joined}`}>{joined}</p>
                    </div>
                </div>
                <div className={style.follows}>
                    <p className={style.following}>{following}</p>
                    <p className={style.followers}>{followers}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
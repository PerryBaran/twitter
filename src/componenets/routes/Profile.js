import React from 'react';
import Sidebar from '../Sidebar.js';
import topStyle from '../styles/topbar.module.css';
import style from '../styles/profile.module.css';

//images
import back from '../../images/back.png';
import messages from '../../images/messages.png';

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
            <Topbar name={'placeholder'} tweets={'10'}/>
            <ProfileInfo cover={back} profile={back}/>
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
    const {cover, profile} = props
    return (
        <div className={style.container}>
            <div className={style.coverImg}>
                <img alt='' src={cover}/>
            </div>
            <div className={style.profileImg}>
                <img alt='' src={profile}/>
            </div>
            <div>
                <div className={style.buttons}>
                    <button className={style.ellipses}>
                        <div>...</div>
                    </button>
                    <button className={style.buttonImg}>
                        <img alt='' src={messages}/>
                    </button>
                    <button className={style.follow}>Follow</button>
                </div>
                <div>
                    <h2></h2>
                    <h3></h3>
                </div>
                <p></p>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
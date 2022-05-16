import React from 'react';
import style from './styles/navbar.module.css';
//all image imports
import logo from '../images/logo.png';
import home from '../images/home.png';
import explore from '../images/explore.png';
import notifications from '../images/notifications.png';
import messages from '../images/messages.png';
import profile from '../images/profile.png';
import more from '../images/more.png';

function Navbar(props) {
    return (
        <div className={style.navBar}>
            <div className={style.logoContainer}>
                <div className={style.logo}>
                    <img src={logo} alt=''/>
                </div>
            </div>
            <Navbutton name='Home' src={home}/>
            <Navbutton name='Explore' src={explore}/>
            <Navbutton name='Notifications' src={notifications}/>
            <Navbutton name='Messages' src={messages}/>
            <Navbutton name='Profile' src={profile}/>
            <Navbutton name='More' src={more}/>
            <button className={style.tweet}>Tweet</button>
            {/* placeholder values*/}
            <NavProfile src={logo} name="Placeholder" handle="placeholder"/>
        </div>
    );
}

const Navbutton = (props) => {
    const {src, name} = props
    return (
        <div className={style.navButtonContainer}>
            <button className={style.navButton}>
                <div className={style.navImg}>
                    <img src={src} alt=''/>
                </div>
                <p>{name}</p>
            </button>
        </div>
    );
}

const NavProfile = (props) => {
    const {src, name, handle} = props
    return (
        <button className={style.profile}>
                <div className={style.profileImg}>
                    <img alt='' src={src}></img>
                </div>
                <div className={style.profileNames}>
                    <p className={style.displayName}>{name}</p>
                    <p className={style.handle}>{handle}</p>
                </div>
                <p className={style.ellipses}>...</p>
            </button>
    )
}

export default Navbar;
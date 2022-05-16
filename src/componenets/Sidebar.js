import React from 'react';
import style from './styles/sidebar.module.css';
import Search from './Search.js';

//temp img
import image from '../images/profile.png';

function Sidebar(props) {
    const {explore} = props

    return (
        <div className={style.mainContainer}>
            {!explore && 
                <Search />
            }
            <div className={style.emptyContainer}/>
            <div>
                <Follow />
                <Details />
            </div>
        </div>
    );
}

const Follow = (props) => {
    return (
        <div className={style.follow}>
            <h2 className={style.followTitle}>Who to follow</h2>
            {/*temp values for styling*/}
            <Suggestion src={image} name="Michael Reeves" handle="michaelreeves"/>
            <Suggestion src={image} name="Why I Hate this Album" handle="AlbumHatePod"/>
            <Suggestion src={image} name="Killer Queen" handle="Kira"/>
            <p className={style.showMore}>Show More</p>
        </div>
    );
}

const Suggestion = (props) => {
    const {src, name, handle} = props;

    return (
        <div className={style.suggestion}>
            <div className={style.suggestionImg}>
                <img alt='' src={src}/>
            </div>
            <div className={style.suggestionNames}>
                <p className={style.displayName}>{name}</p>
                <p className={style.handle}>{handle}</p>
            </div>
            <button className={style.followButton}>Follow</button>
        </div>
    )
}

const Details = (props) => {
    return (
        <div>
            details
        </div>
    );
}

export default Sidebar;
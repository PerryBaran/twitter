import React from 'react';
import style from './styles/sidebar.module.css';
import Search from './Search.js';

function Sidebar(props) {
    const {explore} = props

    if (!explore) {
        return (
            <div className={style.mainContainer}>
                <Search />
                <div className={style.emptyContainer}/>
                <div>
                    <WhatsHappening />
                    <Follow />
                    <Details />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Follow />
                <Details />
            </div>
        );
    }
    
}

const WhatsHappening = (props) => {
    return (
        <div>
            whats happening
        </div>
    );
}

const Follow = (props) => {
    return (
        <div>
            follow
        </div>
    );
}

const Details = (props) => {
    return (
        <div>
            details
        </div>
    );
}

export default Sidebar;
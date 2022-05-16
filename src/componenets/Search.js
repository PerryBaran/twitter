import React from 'react';
import style from './styles/searchbar.module.css';

import searchIcon from '../images/explore.png'

function Search(props) {
    return (
        <div className={style.container}>
            <div className={style.position}>
                <div className={style.searchImg}>
                    <img src={searchIcon} alt='' />
                </div>
                <input placeholder='Search Twitter' className={style.searchInput}/>   
            </div>
            
        </div>
    );
}

export default Search;
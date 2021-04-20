import React from 'react';
import './Header.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


const Header = () => {
    return (
        <div id="head-part">
            <header><EmojiObjectsIcon id="logo" />
            <nav><snap>Google</snap> 
            Keep</nav></header>
        </div>
    )
}

export default Header

import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import "./Header.css";
import MyLogo from '../logo.png';

function Header() {
    return (
        <div className="header">
            <CgProfile className="header__icon" size={30} />
            <img
                src={MyLogo}
                alt="Recipe Tinder"
            />
            <HiOutlineQuestionMarkCircle className="header__icon" size={30} />
        </div>
    );
}

export default Header;
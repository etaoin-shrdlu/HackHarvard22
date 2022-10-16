import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import "./Header.css";
import MyLogo from '../logo22.png';

function Header() {
    return (
        <>
            <div className="header">
                <CgProfile className="header__icon" size={30} />
                <div>
                    <img
                        src={MyLogo}
                        alt="Recipe Tinder"
                    />
                    <font face='Gotham Rounded' size='6.5'><b>recipe finder</b></font>
                </div>
                <HiOutlineQuestionMarkCircle className="header__icon" size={30} />
            </div>
        </>
    );
}

export default Header;
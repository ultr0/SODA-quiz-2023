import React from 'react';
import iconLogoBlack from '../res/png/Main_logo_rus_transparent_black.png';
import iconLogoWhite from '../res/png/Main_logo_rus_transparent_white.png';

function Logo(props) {
    return (

        <div className={`size__logo ${props.position}`}>
            <img src={props.startPage ? iconLogoWhite : iconLogoBlack} className="logo-img" alt="logo"/>
        </div>

    );
}


export default Logo;


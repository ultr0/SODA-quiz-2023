import React from 'react';
import iconHome from '../res/svg/home.svg';


function refreshPage(props) {
    window.location.reload(false);
}

function HomeButton(props) {
    return (

        <button className={`home-btn ${props.position}`} onClick={refreshPage}>
            <img src={iconHome} className="home-img" alt="home"/>
        </button>

    );
}


export default HomeButton;


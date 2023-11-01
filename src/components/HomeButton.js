import React from 'react';
import iconHome from '../res/svg/home.svg';


function refreshPage() {
    window.location.reload(false);
}

function HomeButton(props) {
    return (

        <button className="finish-btn" onClick={refreshPage}>
            <img src={iconHome} className="home-btn" alt="home"/>
        </button>

    );
}


export default HomeButton;
import React from 'react';
import Icon from '../res/svg/backVector.svg';
import PropTypes from "prop-types";


function BackButton(props) {
    return (

        <button className={`home-btn ${props.position}`} onClick={props.PressBtn}>
            <img src={Icon} className="home-img" alt="home"/>
        </button>

    );
}

BackButton.propTypes = {
    PressBtn: PropTypes.func.isRequired
};
export default BackButton;


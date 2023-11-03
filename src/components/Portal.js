import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";


function Portal(props) {

    return (
        <CSSTransitionGroup
            className="finish-container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div className='finish-wrapper portal'>
                <div className="portal-wrapper">
                    <iframe src={props.quizURL} width='100%' height='100%'></iframe>
                    <div className='btn-wrapper btn-wrapper__portal'>
                        <BackButton PressBtn={props.resultPressBtn}/>
                        <HomeButton/>
                    </div>
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

Portal.propTypes = {
    quizURL: PropTypes.string.isRequired,
    resultPressBtn: PropTypes.func.isRequired,
    portalPressBtn: PropTypes.func.isRequired
};

export default Portal;

import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from "prop-types";
import Result from "./Result";
import HomeButton from "./HomeButton";
import BackButton from "./BackButton";


function FinishVideo(props) {

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
            <div className='finish-wrapper'>
                <h1>УзнайТЕ о курорте больше</h1>

                <div className="video-wrapper">
                    <div className="video">


                        <p>ВИДЕО</p>

                    </div>
                    <div className='btn-wrapper btn-wrapper__video'>
                        <BackButton PressBtn={props.resultPressBtn}/>
                        <HomeButton/>
                    </div>

                </div>
            </div>
        </CSSTransitionGroup>
    );
}

Result.propTypes = {
    resultPressBtn: PropTypes.func.isRequired,
    portalPressBtn: PropTypes.func.isRequired
};

export default FinishVideo;

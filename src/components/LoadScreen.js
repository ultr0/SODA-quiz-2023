import React from "react";
import PropTypes from "prop-types";
import {CSSTransitionGroup} from 'react-transition-group';

function LoadScreen(props) {
    return (
        <CSSTransitionGroup
            className="con"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div className="intro">
                <div className="intro-wrapper">
                    <p className="text-header">Подбираю <br/>подходящий курорт</p>
                </div>

                <div className="intro-fox fox-position-l"></div>

            </div>
        </CSSTransitionGroup>
    );
};

LoadScreen.propTypes = {
    start: PropTypes.func.isRequired
};

export default LoadScreen;
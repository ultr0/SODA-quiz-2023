import React from "react";
import PropTypes from "prop-types";
import {CSSTransitionGroup} from 'react-transition-group';
import Logo from "./Logo";

function IntroScreen(props) {
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
                <Logo startPage='true' position='pos__logo__start'/>
                <div className="intro-wrapper">
                    <p className="text-header">НАЙДИТЕ СВОЕ ИДЕАЛЬНОЕ МЕСТО ОТДЫХА</p>
                    <p className="text-description">
                        Ответьте на 10 вопросов и узнайте, какой <br/>
                        из кавказских курортов подойдет именно вам
                    </p>
                    <button className="intro-btn" onClick={props.start}>Начать</button>
                </div>

                <div className="intro-fox fox-position-r"></div>

            </div>
        </CSSTransitionGroup>
    );
};

IntroScreen.propTypes = {
    start: PropTypes.func.isRequired
};

export default IntroScreen;
import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import HomeButton from "./HomeButton";
import LoadScreen from "./LoadScreen";


function Result(props) {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(function () {
        const timeout = setTimeout(function () {
            setIsVisible(false);
        }, 3000)
    },)

    return isVisible ? <LoadScreen/> : (


        <CSSTransitionGroup
            className="result-container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >

            <div className={`img-result ${props.resultImg}`}>
            </div>
            <div className="text-result">
                <div className="text-result-wrapper">

                    <h1>{props.quizHeader}</h1>
                    <p>{props.quizText}</p>

                </div>
                <div className='btn-wrapper btn-wrapper__result'>
                    <button className='result-btn video-btn' onClick={props.videoPressBtn}>Посмотреть вдохновляющее
                        видео
                    </button>
                    {props.quizURL ?
                        <button className='result-btn portal-btn' onClick={props.portalPressBtn}>Познакомиться с
                            курортом на сайте</button> : null}
                </div>
                <HomeButton position='home-btn__result'/>
            </div>


        </CSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
    quizText: PropTypes.string.isRequired,
    quizURL: PropTypes.string.isRequired,
    quizHeader: PropTypes.string.isRequired,
    resultImg: PropTypes.string.isRequired,
    videoPressBtn: PropTypes.func.isRequired,
    portalPressBtn: PropTypes.func.isRequired
};

export default Result;

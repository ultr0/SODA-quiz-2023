import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import HomeButton from "./HomeButton";
import LoadScreen from "./LoadScreen";
import {useIdleTimer} from "react-idle-timer";


function Result(props) {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(function () {
        setTimeout(function () {
            setIsVisible(false);
        }, 3000)
    },)

    const onIdle = () => {
        window.location.reload(false);
    }
    const {getRemainingTime} = useIdleTimer({
        onIdle,
        timeout: 60_000,
        throttle: 500
    })

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
                    <p dangerouslySetInnerHTML={{__html: props.quizText}}/>
                    {/*<p>{props.quizText}</p>*/}

                </div>
                <div className='qr-wrapper'>
                    <img className='qr-img' src={`${process.env.PUBLIC_URL}/qr/${props.resultQR}`} alt='qr-code'/>

                    <p className='qr-text'>Узнайте больше о курорте <br/> на портале Кавказ.РФ</p>
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
    resultQR: PropTypes.string.isRequired
};

export default Result;

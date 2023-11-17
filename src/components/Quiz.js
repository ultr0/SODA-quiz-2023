import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import ProgressBar from "@ramonak/react-progress-bar";
import HomeButton from "./HomeButton";
import {useIdleTimer} from "react-idle-timer";
import Logo from "./Logo";

function Quiz(props) {

    const onIdle = () => {
        window.location.reload(false);
    }
    useIdleTimer({
        onIdle,
        timeout: 60_000,
        throttle: 500
    })

    function renderAnswerOptions(key) {

        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answerImg={key.image}
                answerNumber={key.number}
                answer={props.answer}
                questionNumber={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <Logo position='pos__logo__quiz'/>
            <div className="quiz-container" key={props.questionId}>
                <QuestionCount counter={props.questionId} total={props.questionTotal}/>
                <ProgressBar completed={props.questionId} maxCompleted={props.questionTotal} bgColor="#79A1C6"
                             customLabel=" " height='12px' width="76.46vw"/>
                <Question content={props.question}/>
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
            <HomeButton position='home-btn__result'/>
        </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;

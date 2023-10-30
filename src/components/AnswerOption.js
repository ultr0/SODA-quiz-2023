import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                <div className='labelImage' style={{backgroundImage: `url(${props.answerImg})`}}></div>
                {/*<div className='labelImage' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/questions/q${props.questionId}/${props.answerNumber}.png)`}}></div>*/}
                <div className='labelText'><p>{props.answerContent}</p></div>

            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answerImg: PropTypes.string.isRequired,
    answerNumber: PropTypes.number.isRequired,
    questionNumber: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;

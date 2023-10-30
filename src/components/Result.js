import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';


function Result(props) {
  return (
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
        </div>
        <button className='result-btn' onClick={props.finishPressBtn}>Далее</button>
      </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  quizText: PropTypes.string.isRequired,
  quizHeader: PropTypes.string.isRequired,
  resultImg: PropTypes.string.isRequired,
  finishPressBtn: PropTypes.func.isRequired
};

export default Result;

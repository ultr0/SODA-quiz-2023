import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {useInterval} from '../hooks/useInterval';

const ONE_SECOND = 1000;
const ONE_MINUTE = 60;

function Result(props) {
  const [timeLeft, setTimeLeft] = useInterval(ONE_MINUTE / 12, ONE_SECOND);

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

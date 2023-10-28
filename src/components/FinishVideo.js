import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';


function refreshPage() {
    window.location.reload(false);
}

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
                </div>
                <button className="finish-btn" onClick={refreshPage}>Домой</button>
            </div>
        </CSSTransitionGroup>
    );
}


export default FinishVideo;

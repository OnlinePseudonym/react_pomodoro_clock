import React from 'react';

const Controls = (props) => {
    return (
        <div className="controls">
            <label className="slider-label">Work: {props.workDuration} {props.workDuration === 1 ? 'min' : 'mins'}
                <input className="slider" type="range" min="1" max="50" step="1" defaultValue={props.workDuration} onChange={props.setWork} />
            </label>
            <label className="slider-label">Break: {props.shortBreakDuration} {props.shortBreakDuration === 1 ? 'min' : 'mins'}
                <input className="slider" type="range" min="1" max="5" step="1" defaultValue={props.shortBreakDuration} onChange={props.setShortBreak} />
            </label>
            <label className="slider-label">Long Break: {props.longBreakDuration} {props.longBreakDuration === 1 ? 'min' : 'mins'}
                <input className="slider" type="range" min="1" max="30" step="1" defaultValue={props.longBreakDuration} onChange={props.setLongBreak} />
            </label>
            <button className="btn" onClick={props.startTimer}>Start</button>
        </div>
    )
}

export default Controls
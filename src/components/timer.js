import React, { Component } from 'react';
import Progress from './progress';
import alert from '../sounds/alert.wav'

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countdown: this.props.seconds,
            isPaused: false,
        }

        this.timer = this.timer.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.formatTime = this.formatTime.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(this.timer, 1000),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    timer() {
        this.props.setOffset(this.state.countdown);
        const count = this.state.countdown - 1;
        if(count >= 0) {
            this.setState({ countdown: count })
        } else {
            const audio = document.querySelector('.alert');
            audio.currentTime = 0;
            audio.play();
            this.props.progressTimer();
            this.setState({ countdown: this.props.seconds - 1})
        }
    }

    handleReset() {
        clearInterval(this.state.timer);
        this.props.reset();
        this.setState({
            countdown: this.props.seconds,
            isPaused: false,
            timer: setInterval(this.timer, 1000),
        })
    }

    handlePause() {
        this.state.isPaused ? (
            this.setState({
                timer: setInterval(this.timer, 1000),
                isPaused: false,
            })
        ) : (
            clearInterval(this.state.timer),
            this.setState({ isPaused : true, })
        );
    }

    formatTime(seconds) {
        const minutesOutput = Math.floor((seconds / 60).toString().padStart(2, '0'));
        const secondsOutput = (seconds % 60).toString().padStart(2, '0');
        return `${minutesOutput}:${secondsOutput}`
    }

    render() {
        return (
            <div className="timer">
                <div id="time-left" className="display">{this.formatTime(this.state.countdown)}</div>
                <Progress
                    completedPomodoros={this.props.completedPomodoros}
                    isWork={this.props.isWork}
                    formatTime={this.formatTime}
                    workDuration={this.props.workDuration}
                    shortBreakDuration={this.props.shortBreakDuration}
                    longBreakDuration={this.props.longBreakDuration} />
                <div className="btns">
                    <button className="btn" onClick={this.handlePause}>{this.state.isPaused ? 'Resume' : 'Pause'}</button>
                    <button id="reset" className="btn" onClick={this.handleReset}>Reset</button>
                </div>
                <audio src={alert} className="alert"></audio>
            </div>
        )
    }
}

export default Timer;
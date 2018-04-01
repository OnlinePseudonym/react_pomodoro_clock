import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countdown: props.seconds,
            isPaused: false,
        }

        this.timer = this.timer.bind(this);
        this.handlePause = this.handlePause.bind(this);
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
        const count = this.state.countdown - 1;
        if(count >= 0) {
            this.setState({ countdown: count })
        } else {
            this.props.progressTimer();
            this.setState({ countdown: this.props.seconds})
        }
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

    render() {
        const minutes = Math.floor((this.state.countdown / 60).toString().padStart(2, '0'));
        const seconds = (this.state.countdown % 60).toString().padStart(2, '0');
        return (
            <div className="timer">
                <div className="display">{`${minutes}:${seconds}`}</div>
                <ul>
                    <li>work</li>
                    <li>short break</li>
                    <li>work</li>
                    <li>short break</li>
                    <li>work</li>
                    <li>short break</li>
                    <li>work</li>
                    <li>long break</li>
                </ul>
                <button onClick={this.handlePause}>{this.state.isPaused ? 'Resume' : 'Pause'}</button>
                <button>Reset Pomodoro</button>
            </div>
        )
    }
}

export default Timer;
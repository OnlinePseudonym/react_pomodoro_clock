import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: props.seconds,
        }

        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        const countdown = setInterval(this.timer, 1000);
        this.setState({
            countdown,
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.countdown);
    }

    timer() {
        const count = this.state.timer - 1;
        if(count >= 0) {
            this.setState({ timer: count })
        } else {
            this.props.progressTimer();
            this.setState({ timer: this.props.seconds})
        }
    }

    render() {
        const minutes = Math.floor((this.state.timer / 60).toString().padStart(2, '0'));
        const seconds = (this.state.timer % 60).toString().padStart(2, '0');
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
            </div>
        )
    }
}

export default Timer;
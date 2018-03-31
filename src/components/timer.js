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
        this.setState({
            timer: this.state.timer - 1,
        })
    }

    render() {
        const minutes = Math.floor((this.state.timer / 60).toString().padStart(2, '0'));
        const seconds = (this.state.timer % 60).toString().padStart(2, '0');
        return (
            <div>{`${minutes}:${seconds}`}</div>
        )
    }
}

export default Timer;
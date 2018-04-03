import React, { Component } from 'react';
import Timer from './timer';
import Controls from './controls';
import Waves from './waves';
import Completed from './completed';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completedPomodoros: 0,
            isActive: false,
            isWork: true,
            workDuration: 15,
            shortBreakDuration: 3,
            longBreakDuration: 25,
            offset: 0,
        }

        this.progressTimer = this.progressTimer.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.setWork = this.setWork.bind(this);
        this.setShortBreak = this.setShortBreak.bind(this);
        this.setLongBreak = this.setLongBreak.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.setOffset = this.setOffset.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        this.setOffset(this.state.workDuration * 60);
    }

    setWork(e) {
        this.setState({ workDuration: parseInt(e.target.value)});
    }
    setShortBreak(e) {
        this.setState({ shortBreakDuration: parseInt(e.target.value)});
    }
    setLongBreak(e) {
        this.setState({ longBreakDuration: parseInt(e.target.value)});
    }

    handleRestart() {
        this.setState({
            completedPomodoros: 0,
            isActive: false,
            isWork: true,
        })
    }

    handleReset() {
        this.setState({
            completedPomodoros: 0,
            isWork: true,
        })
    }

    setOffset(seconds) {
        const height = document.querySelector('.app').offsetHeight;
        const totalSeconds = this.state.isWork ? this.state.workDuration * 60 : 
                                            this.state.completedPomodoros < 4 ? this.state.shortBreakDuration * 60 :
                                                                                this.state.longBreakDuration * 60;
        this.setState({
            offset: height - (height * (seconds / (totalSeconds * 1.0))),
        })
    }

    startTimer() {
        this.setState({
            isActive: true,
        })
    }

    progressTimer() {
        if (this.state.isWork) {
            this.setState({
                completedPomodoros: this.state.completedPomodoros + 1,
                isWork: false,
            })
        } else {
            if (this.state.completedPomodoros < 4) {
                this.setState({
                    isWork: true,
                });
            } else {
                this.setState({
                    isActive: false,
                })
            }
        }
    }
    
    render() {
        const waveStyle = {
            transform: 'translateY(0)'
        };

        return (    
            <div className="app">
                <Waves style={waveStyle} offset={this.state.offset} />
                <h1>Pomodoro timer</h1>
                {this.state.isActive && <Timer
                    progressTimer={this.progressTimer}
                    completedPomodoros={this.state.completedPomodoros}
                    isWork={this.state.isWork}
                    setTimeLeft={this.state.setTimeLeft}
                    setOffset={this.setOffset}
                    reset={this.handleReset}
                    seconds={this.state.isWork ? this.state.workDuration * 60 : 
                                                 this.state.completedPomodoros < 4 ? this.state.shortBreakDuration * 60 :
                                                                           this.state.longBreakDuration * 60} />
                    }
                {(this.state.completedPomodoros === 0 && !this.state.isActive) && (
                    <Controls
                        setWork={this.setWork}
                        setShortBreak={this.setShortBreak}
                        setLongBreak={this.setLongBreak}
                        workDuration={this.state.workDuration}
                        shortBreakDuration={this.state.shortBreakDuration}
                        longBreakDuration={this.state.longBreakDuration}
                        startTimer={this.startTimer}
                    />
                )}
                {(this.state.completedPomodoros >= 4 && !this.state.isActive) && (
                    <Completed handleRestart={this.handleRestart} />
                )}
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import Timer from './timer';
import Controls from './controls';

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
        }

        this.progressTimer = this.progressTimer.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.setWork = this.setWork.bind(this);
        this.setShortBreak = this.setShortBreak.bind(this);
        this.setLongBreak = this.setLongBreak.bind(this);
        this.startTimer = this.startTimer.bind(this);
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
        return (
            
            <div className="app">
                <div className="sky">
                    <div className="waves">
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                        <div className="wave wave-4" />
                    </div>
                </div>
                <h1>Pomodoro timer</h1>
                {this.state.isActive && <Timer
                    progressTimer={this.progressTimer}
                    completedPomodoros={this.state.completedPomodoros}
                    isWork={this.state.isWork}
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
                    <div>
                        <div>Completed</div>
                        <button className="btn" onClick={this.handleRestart}>Start New Pomodoro Set</button>
                    </div>
                )}
            </div>
        )
    }
}

export default App;
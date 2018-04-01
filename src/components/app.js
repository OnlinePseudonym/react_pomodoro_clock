import React, { Component } from 'react';
import Timer from './timer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completedPomodoros: 0,
            isActive: false,
            isWork: true,
            work: .25,
            shortBreak: .1,
            longBreak: .5,
        }

        this.progressTimer = this.progressTimer.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    handleRestart() {
        this.setState({
            completedPomodoros: 0,
            isActive: false,
            isWork: true,
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
            
            <div>
                <h1>Pomodoro timer</h1>
                {this.state.isActive && <Timer
                    progressTimer={this.progressTimer}
                    completedPomodoros={this.state.completedPomodoros}
                    isWork={this.state.isWork}
                    seconds={this.state.isWork ? this.state.work * 60 : 
                                                 this.state.completedPomodoros < 4 ? this.state.shortBreak * 60 :
                                                                           this.state.longBreak * 60} />
                    }
                {(this.state.completedPomodoros === 0 && !this.state.isActive) && <button onClick={() => {this.setState({isActive:true})}}>Start Set</button> }
                {(this.state.completedPomodoros >= 4 && !this.state.isActive) && <button onClick={this.handleRestart}>Start New Pomodoro Set</button> }
            </div>
        )
    }
}

export default App;
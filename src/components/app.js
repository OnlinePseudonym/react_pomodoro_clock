import React, { Component } from 'react';
import Timer from './timer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pomodoro: 0,
            isActive: false,
            isWork: true,
            work: .25,
            shortBreak: .1,
            longBreak: .5,
        }

        this.progressTimer = this.progressTimer.bind(this);
    }

    progressTimer() {
        if (this.state.isWork) {
            this.setState({
                pomodoro: this.state.pomodoro + 1,
                isWork: false,
            })
        } else {
            if (this.state.pomodoro < 4) {
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
                {this.state.isActive && <Timer progressTimer={this.progressTimer} 
                    seconds={this.state.isWork ? this.state.work * 60 : 
                                                 this.state.pomodoro < 4 ? this.state.shortBreak * 60 :
                                                                           this.state.longBreak * 60} />
                    }
                <div className="buttons">
                    <button onClick={() => {this.setState({isActive:true})}}>Start Set</button>
                    <button>Pause</button>
                    <button>Reset Pomodoro</button>
                </div>
            </div>
        )
    }
}

export default App;
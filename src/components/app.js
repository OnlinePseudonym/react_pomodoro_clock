import React, { Component } from 'react';
import Timer from './timer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pomodoro: 0,
            isWork: true,
            work: 25,
            shortBreak: 5,
            longBreak: 30,
        }
    }
    
    render() {
        return (
            <div>
                <h1>Pomodoro timer</h1>
                <Timer seconds={this.state.isWork ? this.state.work * 60 : this.state.shortBreak * 60} />
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
                <div className="buttons">
                    <button>Start Set</button>
                    <button>Pause</button>
                    <button>Reset Pomodoro</button>
                </div>
            </div>
        )
    }
}

export default App;
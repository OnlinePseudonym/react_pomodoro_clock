import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pomodoro: 0,
            work: 25,
            shortBreak: 5,
            longBreak: 30,
        }
    }
    
    render() {
        return (
            <div>
                <h1>Pomodoro timer</h1>
                <div>25:00</div>
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

export default App;
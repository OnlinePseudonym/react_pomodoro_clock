import React from 'react';

const Progress = (props) => {
    const content = ['work','short break','work','short break','work','short break','work','long break'];
    const currentStep = (props.completedPomodoros * 2) - (props.isWork ? 0 : 1);
    const output = [];
    for (let i = 0, len = content.length; i < len; i++) {
        if (currentStep > i) {
            output.push(<li className="completed">{content[i]}</li>);
        } else if (currentStep === i) {
            output.push(<li className="active">{content[i]}</li>);
        } else {
            output.push(<li>{content[i]}</li>)
        }
    }
    return (
        <ul>
            {output}
        </ul>
    )
}

export default Progress
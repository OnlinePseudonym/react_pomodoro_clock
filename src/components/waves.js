import React from 'react';

const Waves = (props) => {
    const styles = {
        transform: `translateY(${props.offset}px)`
    };

    return (
        <div className="sky">
            <div className="waves" style={ styles }>
                <div className="wave wave-1" />
                <div className="wave wave-2" />
                <div className="wave wave-3" />
                <div className="wave wave-4" />
            </div>
        </div>
    )
}

export default Waves;
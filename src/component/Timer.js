import React, { useState, useEffect } from 'react';

function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => clearInterval(intervalId); 
        } else {
            alert("Time's up");
        }
    }, [timer]);

    return (
        <div className="timer-container">
            <h1 className="timer-header">Countdown Timer</h1>
            <div className="timer-count">{timer}</div>
        </div>
    );
}

export default Timer;

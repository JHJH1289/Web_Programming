import React, { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            console.log("타이머 정리");
            clearInterval(interval);
        };
    }, []);

    return <h1>{seconds}초 경과</h1>;
}

export default Timer;

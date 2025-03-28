import { useState, useEffect } from "react";

const Timer = () =>{
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] =useState(false)

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) =>  prev + 1)
            }, 1000)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    return(
        <div>
            <h1>{seconds} s</h1>
            <div>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
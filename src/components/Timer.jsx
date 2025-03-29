import { useState, useEffect, useContext } from "react";
import PathContext from "../contexts/PathContextBase";

const Timer = () =>{
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] =useState(false)

    const { savedTime, setSavedTime } = useContext(PathContext)

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) =>  prev + 10)
            }, 10)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    const formatTime = (ms) => {
        const hours = Math.floor(ms / 3600000)
        const minutes = Math.floor ((ms % 3600000) / 60000)
        const seconds = Math.floor((ms % 60000) / 1000)
        const milliseconds = Math.floor((ms % 1000) / 10)

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`
    }

    const handleStart = () => {
        setIsRunning(true)
    }

    const handlePause = () => {
        setIsRunning(false)
    }

    const handleStop = () => {
        setIsRunning(false)
        setSavedTime(time)
    } 

    const handleReset = () => {
        setTime(0)
        setIsRunning(false)
        setSavedTime(null)
    }

    return(
        <div>
            <h1>{formatTime(time)}</h1>
            {savedTime !== null && (
                <p>Saved time: {formatTime(savedTime)}</p>
            )}
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
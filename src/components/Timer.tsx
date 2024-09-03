import { useState, useEffect } from "react";

export default function Timer() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerInterval = null;

    if (timerRunning) {
      // const startTime = Date.now() - time * 1000;
      timerInterval = setInterval(() => {
        // setTime(Math.floor((Date.now() - startTime) / 1000));
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval); // Cleanup function
  }, [timerRunning, time]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(time)}</p>
      {!timerRunning && <button onClick={handleStart}>Start</button>}
    </div>
  );
}

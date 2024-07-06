/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // STOPWATCH
  const [stopwatchTime, setStopwatchTime] = useState({ hour: 0, min: 0, sec: 0, ms: 0 });
  const [stopwatchIsRunning, setStopWatchIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const date = new Date();
  const year = date.getFullYear();

  // CLOCK
  const [clockTime, setClockTime] = useState({ hour: 0, min: 0, sec: 0 });
  const [clockIsRunning, setClockIsRunning] = useState(false);
  let interval = null;

  // TIMER
  const [timer, setTimer] = useState(25 * 60);//25min timer
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  let timerInterval = null;

  // -------------------------------STOPWATCH-----------------------------------------------//
  function handleStopWatchStartPause() {
    if (stopwatchIsRunning) {
      intervalRef.current = setInterval(() => {
        setStopwatchTime((prevTime) => {
          let { hour, min, sec, ms } = prevTime;
          ms += 1;
          if (ms === 100) {
            ms = 0;
            sec += 1;
          }
          if (sec === 60) {
            sec = 0;
            min += 1;
          }
          if (min === 60) {
            min = 0;
            hour += 1;
          }
          return { hour, min, sec, ms };
        });
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
  }

  useEffect(() => {
    handleStopWatchStartPause();
    // clean up function, generally to avoid a
    return () => clearInterval(intervalRef.current);
  }, [stopwatchIsRunning]);

  function handleStopwatchReset() {
    clearInterval(intervalRef.current);
    setStopWatchIsRunning(false);
    setStopwatchTime({ hour: 0, min: 0, sec: 0, ms: 0 });
  }

  // -------------------------------CLOCK-----------------------------------------------//

  function handleCurrTime() {
    if (clockIsRunning) {
      interval = setInterval(() => {
        const date = new Date();
        setClockTime({
          hour: date.getHours(),
          min: date.getMinutes(),
          sec: date.getSeconds(),
        });
      })
    } else {
      clearInterval(interval)
    }
  }

  useEffect(() => {
    handleCurrTime();
    return () => clearInterval(interval);
  }, [clockIsRunning]);

  function handleClockReset() {
    clearInterval(interval);
    setClockIsRunning(false);
    setClockTime({ hour: 0, min: 0, sec: 0 });
  }

  // -------------------------------TIMER-----------------------------------------------//
  function handleTimerStartPause() {
    if (timerIsRunning) {
      timerInterval = setInterval(() => {
        setTimer(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
  }
  function formatTime(timer) {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? '0' + minutes : minutes} m : ${seconds < 10 ? '0' + seconds : seconds} s`
  }
  useEffect(() => {
    handleTimerStartPause();
    return () => clearInterval(timerInterval);
  }, [timerIsRunning]);

  function handleTimerReset() {
    clearInterval(timerInterval);
    setTimerIsRunning(false);
    setTimer(25 * 60);
  }


  return (
    <>

      <div className='container header'>
        <header>React - Hooks, State, JSX, Components</header>
        <p> ~ Prapti&copy;{year} ~ JS Date logic(Google)</p>
      </div>

      <div className='stopwatch'>
        <h1>Stopwatch</h1>
        <div className='card'>
          <p>{stopwatchTime.hour < 10 ? '0' + stopwatchTime.hour : stopwatchTime.hour}<span> h</span>  : </p>
          <p>{stopwatchTime.min < 10 ? '0' + stopwatchTime.min : stopwatchTime.min}<span> m</span>  : </p>
          <p>{stopwatchTime.sec < 10 ? '0' + stopwatchTime.sec : stopwatchTime.sec}<span> s</span>  : </p>
          <p>{stopwatchTime.ms < 10 ? '0' + stopwatchTime.ms : stopwatchTime.ms}<span> ms</span> </p>
        </div>
        <div className="card">
          <button onClick={() => setStopWatchIsRunning(true)}>Start</button>
          <button onClick={() => setStopWatchIsRunning(false)}>Pause</button>
          <button onClick={handleStopwatchReset}>Reset</button>
        </div>
      </div>

      <div className='clock'>
        <h1>Clock</h1>
        <div className='card'>
          <p>{clockTime.hour < 10 ? '0' + clockTime.hour : clockTime.hour}<span> h</span> : </p>
          <p>{clockTime.min < 10 ? '0' + clockTime.min : clockTime.min}<span> m</span> : </p>
          <p>{clockTime.sec < 10 ? '0' + clockTime.sec : clockTime.sec}<span> s</span></p>
        </div>
        <div className="card">
          <button onClick={() => setClockIsRunning(true)}>Start</button>
          <button onClick={() => setClockIsRunning(false)}>Pause</button>
          <button onClick={handleClockReset}>Reset</button>
        </div>
      </div>

      <div className='timer'>
        <h1>25 min Timer</h1>
        <div className='card'>
          <p>{formatTime(timer)}</p>
        </div>
        <div className="card">
          <button onClick={() => setTimerIsRunning(true)}>Start</button>
          <button onClick={() => setTimerIsRunning(false)}>Pause</button>
          <button onClick={handleTimerReset}>Reset</button>
        </div>
      </div>

    </>
  );
}

export default App;

import { useState, useEffect } from "react/cjs/react.development";
import classes from './Timer.module.css';

export default function Timer ({finish, refresh}) {

    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);



    useEffect(()=>{
        let interval = setInterval(() => {
            
            if (!finish) { 
                if (minutes > 14 ) {
                    clearInterval(interval)
                }
                if (seconds >= 59) {
                    setSeconds(0)
                    setMinutes(minutes+1);
                } else {
                    setSeconds(seconds+1)
                }
            }
            }, 1000);

        if (refresh) {
            refreshTimer();
        }
        
        return () => {
            clearInterval(interval);
        };
    });

    const refreshTimer = () => {
        setMinutes(0);
        setSeconds(0);
    }
  
  return (
        <h2 className={classes.time}>
              {minutes > 9 ? `${minutes}`: `0${minutes}`}:
              {seconds > 9 ? `${seconds}`: `0${seconds}`}
        </h2>
  );
}

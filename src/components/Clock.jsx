import React, { useState, useEffect } from "react";
import "../static/css/clock.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000 * 60);
      return () => clearInterval(timer);
    }, []);
  
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${time.getDate().toString().padStart(2, '0')}/${(time.getMonth() + 1).toString().padStart(2, '0')}/${time.getFullYear()}`;

    return (
      <div className="clock mt-5">
        <div className="clock__hour">{hours}</div>
        <div className="clock__separator">:</div>
        <div className="clock__minute">{minutes}</div>
        <div className="m-2">{formattedDate}</div>
      </div>
    );
  };

export default Clock;

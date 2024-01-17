import React from "react";
import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setReaminingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setReaminingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}

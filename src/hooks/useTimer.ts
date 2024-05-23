import { useState, useEffect } from 'react';
import { parseTime } from '../utils/utils';

const useTimer = (finishTime: number) => {
  const [timeLeft, setTimeLeft] = useState(finishTime - Date.now());

  useEffect(() => {
    if(timeLeft > 0) {
      setTimeout(() => setTimeLeft(finishTime - Date.now()), 1000);
    }
  }, [finishTime, timeLeft]);

  return parseTime(timeLeft);
}

export default useTimer;

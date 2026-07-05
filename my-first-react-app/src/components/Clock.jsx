import { useState, useEffect, use } from "react";


export default function Clock (){
  const[count, setCount] = useState(0);
  const[timerOn, setTimerOn] = useState(false); 

  const resetCount = () => {
    setCount(0);
  
  }
  
  const handleClick = () => {
    setTimerOn((p) => !p); 
  }

  useEffect(() => {
    if(!timerOn) return;
    
    const timer = setInterval(() => {

      setCount((c) => c + 1); 
    }, 1000)

    return () => {
      clearInterval(timer); 
    }

  }, [timerOn]);

  return(
    <>
      <p>{count}</p>
      <button onClick={handleClick}
      style={{padding: '1.5rem', width:'5rem', margin:'auto'}}>
        {timerOn ? 'Stop': 'Start'}
      </button>

      <button onClick={resetCount} 
      style={{width: '3rem', margin:'auto'}}>Reset</button>
    </>
  );
}
import { useState, useEffect } from 'react';

export default function Counter() {

  console.log("entire function"); // display

  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const increase = () => {
    console.log("increase");
    setCount(count + 1);
  };

  const handleClick = () => {
    increase();
    console.log("handleClick function");
  };

  useEffect(() => {
    console.log("effect");
    
    return function cleanup() {
      console.log("cleanup time");
    }
  }, [count])
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import { useState } from "react";

const StepCounterHooks = ({ max, step }) => {
  
  const [number, setNumber] = useState(0);
  const handleClickUp = () => (number < max ? setNumber(number + step) : number );
  const handleClickDown = () => (number > 0 ? setNumber(number - step) : number );

  return (
    <>
      <h3 className="mt-4">Step Counter</h3>
      <button className="btn btn-primary" onClick={ handleClickUp }>+</button>
      <p>{ number }</p>
      <button className="btn btn-primary" onClick={ handleClickDown }>-</button>
    </>
  );

}

export default StepCounterHooks;
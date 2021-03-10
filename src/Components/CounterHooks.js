// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import { useState } from "react";

const CounterHooks = ({ initial, max }) => {
  
  const [number, setNumber] = useState(initial);
  const handleClickUp = () => (number < max ? setNumber(number + 1) : number );
  const handleClickDown = () => (number > 0 ? setNumber(number - 1) : number );

  return (
    <>
      <h3 className="mt-4">Counter</h3>
      <button className="btn btn-primary" onClick={ handleClickUp }>+</button>
      <p>{ number }</p>
      <button className="btn btn-primary" onClick={ handleClickDown }>-</button>
    </>
  );

}

export default CounterHooks;
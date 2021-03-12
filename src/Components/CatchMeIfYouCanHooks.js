// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

import { useState } from "react";

const CatchMeIfYouCanHooks = ({ jump }) => {
  
  const [number, setNumber] = useState(0);
  const handleClick = () => ( setNumber(number + jump) );

  return (
    <>
        <h3 className="mt-4">Catch Me If You Can</h3>
        <div>
            <button
            // could use transform. don't need to set position in this case
              style={{ position: "relative", top: number }}
              className="btn btn-primary" 
              onClick={ handleClick }>
                Catch me!
            </button>
        </div>
    </>
  );

}

export default CatchMeIfYouCanHooks;
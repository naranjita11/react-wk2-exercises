// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import { useState } from "react";

const RollCallHooks = ({ names }) => {
  
    const [indexNumber, setIndexNumber] = useState(0);
    const handleClick = () => (indexNumber < (names.length -1) ? setIndexNumber(indexNumber + 1) : setIndexNumber(0));

    return (
        <>
            <h3 className="mt-4">Roll Call</h3>
            <div>
                <p>{ names[indexNumber] }</p>
                <button className="btn btn-primary" onClick={ handleClick }>
                    Next
                </button>
            </div>
        </>
    );

}

export default RollCallHooks;
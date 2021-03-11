// Create a <Die sides={ 27 }> component that shows a random number between 1 and sides whenever you click on it

// Hint: Math.random() generates a random number between 0 and 1. If you multiply the result by, say 100, and then use Math.floor(), you will get a number between 0 and 99.

import { useState } from "react";

const DieHooks = ({ sides }) => {

    const [number, setNumber] = useState(1);

    const handleClick = () => {
        let random = Math.random();
        setNumber(Math.floor(random * sides));
    };
    
    return (
        <>
            <h3 className="mt-4">{ sides } sided Die</h3>
            <p onClick={ handleClick }>{ number }</p>
        </>
    );

}

export default DieHooks;
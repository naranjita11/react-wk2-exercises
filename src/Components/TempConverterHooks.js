// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

import { useState } from "react";

const TempConverterHooks = () => {

    const [degF, setDegF] = useState(32);
    const [degC, setDegC] = useState(0);

    const fToC = (f) => ((f - 32) * (5 / 9));
    const cToF = (c) => ((c * (9 / 5)) + 32);
    
    const handleChangeF = (e) => {
        let value = +e.currentTarget.value;
        setDegF(value);
        setDegC(fToC(value));
    };

    const handleChangeC = (e) => {
        let value = +e.currentTarget.value;
        setDegC(value);
        setDegF(cToF(value));
    };

    return (
        <>
            <h3 className="mt-4">Temperature Converter</h3>
            <label>°F</label>
            <input
                className="form-control"
                type="number"
                value={ degF }
                onChange={ handleChangeF }
            /> 
            <label>°C</label>
            <input
                className="form-control"
                type="number"
                value={ degC }
                onChange={ handleChangeC }
            /> 
        </>


    );


}

export default TempConverterHooks;
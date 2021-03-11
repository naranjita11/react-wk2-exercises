// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

import { useState } from "react";

const PasswordStrengthHooks = () => {

    const [password, setPassword] = useState("");
    const handleChange = (e) => (setPassword(e.currentTarget.value));

    let validity = null;

    if (password.length === 0) {
        validity = null;
    }

    else if (password.length < 9) {
        validity = "red";
    }

    else if (password.length < 16) {
        validity = "orange";
    }

    else validity = "green";

    return (
        <>
            <h3 className="mt-4">Password Strength</h3>
            <input
                className="form-control"
                type="password"
                style={{ backgroundColor: validity}}
                value={ password }
                onChange={ handleChange }
            /> 
        </>


    );

}

export default PasswordStrengthHooks;
import { useState } from "react";

const Clicked = () => {

    const [clicked, setClicked] = useState(false);
    const clickHandle = () => setClicked(true);

    // display counter and setup click handler
    return (
        <>
            <h3 className="mt-4">Clicked</h3>
            <p onClick={ clickHandle }>{ !clicked ? "not clicked" : "clicked" }</p>
        </>
    );
}
export default Clicked;
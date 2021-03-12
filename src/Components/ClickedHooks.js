import { useState } from "react";

const ClickedHooks = () => {

    const [clicked, setClicked] = useState(false);
    const clickHandle = () => setClicked(true);

    return (
        <>
            <h3 className="mt-4">Clicked</h3>
            <p onClick={ clickHandle }>{ !clicked ? "not clicked" : "clicked" }</p>
        </>
    );
}
export default ClickedHooks;
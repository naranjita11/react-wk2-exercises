// Create a <Colours colours={ colours }> component. It should display a <div> that's 200×200px. When you click on it, it should cycle background colour through the colours array that you pass in. Here are some nice colours:

import { useState } from "react";

const ColoursHooks = ({ colours }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setCurrentIndex(currentIndex < colours.length -1 ? currentIndex + 1 : 0);
    };

    return (
        <>
            <h3 className="mt-4">Colours</h3>
            <div style={{width: 200, height: 200, backgroundColor: `${colours[currentIndex]}`}} onClick={ handleClick } />
        </>
    );
}

export default ColoursHooks;
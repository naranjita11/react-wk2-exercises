import { useState } from "react";

const SquareHooks = ({ colour }) => {
  
  const [selected, setSelected] = useState(false);
  const handleClick = () => setSelected(!selected);

  let selectedColour = selected ? colour : "green" ;
  
  return (
    <>
      <h3 className="mt-4">Square</h3>
      <div
        style={{ width: 200, height: 200, backgroundColor: selectedColour }} 
        onClick={ handleClick }
      />
    </>
  );

}

export default SquareHooks;
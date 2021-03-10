// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.

import { useState } from "react";

const ToggleTextHooks = ({ initial, alternate }) => {
  
  const [selected, setSelected] = useState(true);
  const handleClick = () => setSelected(!selected);

  let text = selected ? initial : alternate ;
  
  return (
    <>
      <h3 className="mt-4">Toggle Text</h3>
      <p>{ text }</p>
      <button className="btn btn-primary" onClick={ handleClick }>Toggle</button>
    </>
  );

}

export default ToggleTextHooks;
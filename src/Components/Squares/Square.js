const Square = ({ colour, selected, handleClick }) => {
  
  let selectedColour = selected ? colour : "grey";
  
  return (
    <div
      style={{ width: 200, height: 200, backgroundColor: selectedColour }} 
      onClick={ handleClick }
    />
  );
}

export default Square;
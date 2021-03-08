import './App.css';
// import Squares from "./Components/Squares/Squares";
import SignUp from "./Components/SignUp/SignUp"

const App = () => (
  <>
    {/* <Squares colour="cornflowerblue" /> */}
    <SignUp minimumLength={ 12 } />
  </>
);

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Squares from "./Components/Squares/Squares";
// import SignUp from "./Components/SignUp/SignUp";
// import News from "./Components/News";
import ClickedHooks from "./Components/ClickedHooks";
import SquareHooks from "./Components/SquareHooks";
import ToggleTextHooks from "./Components/ToggleTextHooks";
import CounterHooks from "./Components/CounterHooks";
import StepCounterHooks from "./Components/StepCounterHooks";
import CatchMeIfYouCanHooks from "./Components/CatchMeIfYouCanHooks";

const App = () => (
  <>
    {/* <Squares colour="cornflowerblue" /> */}
    {/* <SignUp minimumLength={ 12 } /> */}
    {/* <News /> */}
    <ClickedHooks />
    <SquareHooks colour="hotpink" />
    <ToggleTextHooks initial="Hello" alternate="World" />
    <CounterHooks initial={ 23 } max={ 100 } />
    <StepCounterHooks max={ 100 } step={ 5 } />
    <CatchMeIfYouCanHooks jump={ 100 } />
  </>
);

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./News/Articles.js";
// import FourOhFour from "./FourOhFour";

const App = () => (
  <Router>
    <Route exact path="/news">
      <Articles />
    </Route>
          
  </Router>
 
);

export default App;

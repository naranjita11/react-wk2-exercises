import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./News/Articles.js";
import Article from "./News/Article.js";
// import FourOhFour from "./FourOhFour";

const App = () => (
  <Router>
    
    <Route exact path="/news">
      <Articles />
    </Route>

    <Route exact path="/news/:id" render={ ({ match }) => (
      <Article id={ match.params.id } />
    ) } />

  </Router>
 
);

export default App;

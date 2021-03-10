import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./News/Articles.js";
import Article from "./News/Article.js";
import Header from "./News/Header.js";
import CreateArticle from "./News/CreateArticle.js";
import FourOhFour from "../FourOhFour";
// import FourOhFour from "./FourOhFour";

const App = () => (
  <Router>
    <>
      <Header />
      <Switch>
          
        <Route exact path="/news">
          <Articles />
        </Route>

        <Route exact path="/news/create">
          <CreateArticle />
        </Route>

        <Route exact path="/news/:id" render={ ({ match }) => (
          <Article id={ match.params.id } />
        ) } />

        <FourOhFour />

      </Switch>
    </>     
  </Router>
 
);

export default App;

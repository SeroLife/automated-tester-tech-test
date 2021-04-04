import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { CreateRecipe } from './pages/CreateRecipe/CreateRecipe';
import { Home } from './pages/Home/Home';
import { ViewRecipe } from './pages/ViewRecipe/ViewRecipe';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-recipe" component={CreateRecipe} />
          <Route path="/view-recipe/:id" component={ViewRecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

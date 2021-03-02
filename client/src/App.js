import { Home, PostDetail } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Home} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </Router>

  )
}

export default App;

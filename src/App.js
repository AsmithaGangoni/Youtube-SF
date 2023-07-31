import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Recommends from "./components/Award";
import Detail from "./components/Detail";
import horrorDetail from "./components/Genre";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/horrorGenre">
            <horrorDetail />
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

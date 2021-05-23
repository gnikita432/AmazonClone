import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //  BEM convention

    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          {/* control+spacebar=auto import */}
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>

          {/* default route should always be in bottom */}

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* npm install react-router-dom */}
      </div>
    </Router>
  );
}

export default App;

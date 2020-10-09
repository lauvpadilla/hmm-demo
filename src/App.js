import React from "react";
import "./css/tachyons.css";
import "./css/base.css";
import "./css/main.css";

import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Users from "./components/Home";

function App() {
  return (
    <div>
      {/* body */}
      <div>
        <header className="w-100 pv3 ph4 flex items-center justify-between">
          <h3 className="f3-l f5-ns">HMM Team Demo</h3>
          <p className="f6">
            Built with{" "}
            <a className="white" href="https://reactjs.org/">
              React
            </a>
            ,{" "}
            <a className="white" href="http://tachyons.io">
              Tachyons
            </a>{" "}
            and Love
          </p>
        </header>
        {/* Main */}
        <main className="min-vh-100 flex">
          {/* Nav column */}
          <div className="ph4 pt5 w-20 br b--light-silver">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users/" component={Users} />
            </Switch>
          </div>

          {/* content column */}
          <section className="content w-80 pa5">
            {/* Home component */}
            <Home />
            {/* Users Component */}
            <Users />
            {/* Demo Site Component */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

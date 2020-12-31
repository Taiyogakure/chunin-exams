import React from 'react';
import Leaderboard from "./Leaderboard";
import AdminQ from "./AdminQ";
import './Dashboard.scss';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function Dashboard() {
    let match = useRouteMatch();

    return(
        <body id="dash">
        <Router>
        <section className="conts">
        <div className="side-nav">
        <h2><span>C</span>hunin <span>E</span>xam</h2>
          <nav>
            <ul>
              <li>
                <Link to={`${match.url}/`}>AdminQ</Link>
              </li>
              <li>
                <Link to={`${match.url}/leaderboard`}>Leaderboard</Link>
              </li>
            </ul>
            <button type="submit">Sign Out</button>
          </nav>
        </div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className="table">
            <Switch>
            <Route path={`${match.url}/`} exact>
                <AdminQ />
              </Route>
              <Route path={`${match.url}/leaderboard`}>
                <Leaderboard />
              </Route>
            </Switch>
          </div>
        </section>
        <footer id="ver">Version 1.0</footer>
      </Router>
      </body>
    )
}

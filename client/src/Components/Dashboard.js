import React from 'react';
import Leaderboard from "./Leaderboard";
import AdminQ from "./AdminQ";
import './Dashboard.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

export default function Dashboard() {
    let match = useRouteMatch();

    return(
        <body id="dash">
        <Router>
        <section className="conts">
        <div className="side-nav">
          <nav>
            <ul>
              <li>
                <Link to={`${match.url}/`}>AdminQ</Link>
              </li>
              <li>
                <Link to={`${match.url}/leaderboard`}>Leaderboard</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
      </Router>
      </body>
    )
}

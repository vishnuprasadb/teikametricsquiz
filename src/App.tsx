import React from 'react';


import { Router, Switch, Route, Redirect, 
  useRouteMatch, Link, BrowserRouter } from "react-router-dom";

import DashIndex from "./components/Quiz/DashIndex"
import AssessmentIndex from "./components/Quiz/AssessmentIndex"
import FinishIndex from "./components/Quiz/FinishIndex"
import AllResults from "./components/Quiz/AllResultsIndex"

const App: React.FC = () => {
  return (
    <div className="Quiz">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={DashIndex} />
          <Route exact path = "/test" component={AssessmentIndex} />
          <Route exact path = "/test" component={AssessmentIndex} />
          <Route exact path = "/finish" component={FinishIndex} />
          <Route exact path = "/allresults" component={AllResults} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

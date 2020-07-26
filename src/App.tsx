import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./components/ui/Theme";
import { Switch, Route, HashRouter } from "react-router-dom";

import DashIndex from "./components/Quiz/DashIndex"
import AssessmentIndex from "./components/Quiz/AssessmentIndex"
import FinishIndex from "./components/Quiz/FinishIndex"
import AllResults from "./components/Quiz/AllResultsIndex"

const App: React.FC = () => {
  return (
    <div className="Quiz">
      <ThemeProvider theme={theme} >
        <HashRouter>
          <Switch>
            <Route exact path = "/" component={DashIndex} />
            <Route exact path = "/test" component={AssessmentIndex} />
            <Route exact path = "/test" component={AssessmentIndex} />
            <Route exact path = "/finish" component={FinishIndex} />
            <Route exact path = "/allresults" component={AllResults} />
          </Switch>
        </HashRouter>       
      </ThemeProvider>
    </div>
  );
};

export default App;

import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./components/ui/Theme";
import { Switch, Route, HashRouter, BrowserRouter } from "react-router-dom";

import DashIndex from "./components/Quiz/DashIndex"
import AssessmentIndex from "./components/Quiz/AssessmentIndex"
import FinishIndex from "./components/Quiz/FinishIndex"
import AllResults from "./components/Quiz/AllResultsIndex"

const App: React.FC = () => {
  return (
    <div className="Quiz">
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Switch>
            <Route path = {`/test`} component={AssessmentIndex} />
            <Route path = {`/finish`} component={FinishIndex} />
            <Route path = {`/allresults`} component={AllResults} />
            <Route path = {`/`} component={DashIndex} />
          </Switch>
        </BrowserRouter>       
      </ThemeProvider>
    </div>
  );
};

export default App;

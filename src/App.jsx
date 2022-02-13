import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import MainPage from './components/pages/main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div
        data-testid="errorWrapper"
      >
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/" render={() => <Redirect to="/main" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

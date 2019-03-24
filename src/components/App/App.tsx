import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List/List';
import User from '../User/User';

export default class App extends Component<AppProps, AppState> {
  public componentDidMount() {}

  public render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/:name" component={User} />
        </Switch>
      </Router>
    );
  }
}

interface AppProps {
  store?: null;
}

interface AppState {
  name: string;
}

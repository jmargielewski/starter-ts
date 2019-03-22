import React, { Component } from 'react';

export default class App extends Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = { name: 'TypeScript' };
  }

  public render(): JSX.Element {
    const { name } = this.state;
    return (
      <main className="container">
        <h1>{name}</h1>
      </main>
    );
  }
}

interface AppProps {
  store?: null;
}

interface AppState {
  name: string;
}

import React, { Component } from 'react';

export default class List extends Component<ListProps, ListState> {
  public constructor(props: ListProps) {
    super(props);
    this.state = { names: ['Jakub', 'Kris', 'John'] };
  }

  public render(): JSX.Element {
    const { names } = this.state;
    return (
      <ul className="container">
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }
}

interface ListProps {
  store?: null;
}

interface ListState {
  names: string[];
}

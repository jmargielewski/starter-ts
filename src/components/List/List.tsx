import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component<ListProps, ListState> {
  public constructor(props: ListProps) {
    super(props);
    this.state = { names: ['Jakub', 'Kris', 'John'] };
  }

  public render(): JSX.Element {
    const { names } = this.state;
    return (
      <ul className="usersList">
        {names.map(name => (
          <li key={name}>
            <Link to={`${name}`}>{name}</Link>
          </li>
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

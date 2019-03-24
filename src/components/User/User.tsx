import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class User extends Component<UserProps, UserState> {
  public constructor(props: UserProps) {
    super(props);
    this.state = {
      name: this.props.match.params.name
    };
  }

  public render(): JSX.Element {
    const { name } = this.state;
    return <h1>{name}</h1>;
  }
}

interface UserProps extends RouteComponentProps<{ name: string }> {}

interface UserState {
  name: string;
}

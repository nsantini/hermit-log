import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {
    fetch(this.props.file).then((response) => response.text()).then((markdown) => {
      this.setState({ markdown })
    });
  }

  render() {
    return (
      <article>
        <ReactMarkdown source={this.state.markdown} />
        <hr />
      </article>
    );
  }
}
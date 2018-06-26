import React, { Component } from 'react';
import { Box, Text } from 'react-desktop/macOs';
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
      <Box margin="10px 0" padding="0">
        <Text padding="5px 20px" textAlign="left" size="16">
          <ReactMarkdown source={this.state.markdown} />
        </Text>
      </Box>
    );
  }
}
import React, { Component } from 'react';
import { Box, Label, Text, TitleBar } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Box label={this.props.label} margin="10px 0" padding="0">
        <TitleBar title={this.props.title} />
        <Label padding="10px 0" >{this.props.date}</Label>
        <Text padding="50px 100px" textAlign="left" size="16">
          {this.props.text}
        </Text>
      </Box>
    );
  }
}
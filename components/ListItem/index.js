import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class ListItem extends Component {
  static propTypes = {
    customStyle: PropTypes.object,
  };

  render() {
    return <View style={this.props.customStyle}>{this.props.children}</View>;
  }
}

export default ListItem;

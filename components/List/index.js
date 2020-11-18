import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import {v4 as uuidv4} from 'uuid';

class List extends Component {
  static propTypes = {
    children: PropTypes.array,
    getBulletElement: PropTypes.func,
    level: PropTypes.number.isRequired,
    customStyle: PropTypes.object,
    customBulletStyle: PropTypes.object,
    alignBullets: PropTypes.oneOf(['top', 'bottom', 'center']),
  };

  static defaultProps = {
    children: [],
    getBulletElement: () => null,
    alignBullets: 'center',
  };

  render() {
    var { children, level, getBulletElement, alignBullets } = this.props;

    if (!Array.isArray(children)) {
      children = [children];
    }

    let index = 0;

    return (
      <View style={this.props.customStyle}>
        {children.map((child, idx) => {
          const key = uuidv4();

          if (child.type == ListItem) {
            index++;

            return (
              <View key={key} style={[styles.listItemContainer, styles[alignBullets]]}>
                <View style={[styles.bullet]} key={'bullet'}>{getBulletElement(index)}</View>
                {child}
              </View>
            );
          }

          return (
            <View key={key} style={styles.childContainer}>
              {React.cloneElement(child, {
                level: level + 1,
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

export default List;

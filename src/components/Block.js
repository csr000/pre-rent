import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Block extends Component {
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      space,
      style,
      children,
      ...props
    } = this.props;
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === 'disabled' && { flex: 0 },
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      space && { justifyContent: `space-${space}` },
      row && styles.row,
      column && styles.column,
      style,
    ];

    return (
      <View style={blockStyles} {...props} onP>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    // flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

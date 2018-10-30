/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {ScrollView, StyleSheet, Text, TouchableOpacity} = ReactNative;

const NUM_ITEMS = 20;

class ScrollViewSimpleExample extends React.Component<{}> {
  static title = '<ScrollView>';
  static description =
    'Component that enables scrolling through child components.';

  makeItems = (nItems: number, styles): Array<any> => {
    const items = [];
    for (let i = 0; i < nItems; i++) {
      items[i] = (
        <TouchableOpacity key={i} style={styles}>
          <Text>{'Item ' + i}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  };

  render() {
    // One of the items is a horizontal scroll view
    const items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
    items[4] = (
      <ScrollView key={'scrollView'} horizontal={true}>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
        ])}
      </ScrollView>
    );
    items.push(
      <ScrollView
        key={'scrollViewSnap'}
        horizontal
        snapToInterval={210.0}
        pagingEnabled>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
          styles.horizontalPagingItemWrapper,
        ])}
      </ScrollView>,
    );

    const verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>{items}</ScrollView>
    );

    return verticalScrollView;
  }
}

const styles = StyleSheet.create({
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50,
  },
  horizontalPagingItemWrapper: {
    width: 200,
  },
});

module.exports = ScrollViewSimpleExample;
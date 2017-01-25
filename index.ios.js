/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { CardIOView, CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';


export default class CardIoExample extends Component {

  componentWillMount() {
     CardIOUtilities.preload();
  }

  scanCard() {
    CardIOModule
      .scanCard()
      .then(card => {
        // the scanned card
        console.log(card);
      })
      .catch(() => {
        // the user cancelled
        console.log("user cancel");
      })
  }

  didScanCard(card) {
    console.log(card);
    
  }

  render() {
      return (
        <View>
          <TouchableOpacity onPress={this.scanCard} style = {styles.noCamera}>
            <Text>Scan card!</Text>
          </TouchableOpacity>
        </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  noCamera: {
    marginTop: 20,
  }
});

AppRegistry.registerComponent('CardIoExample', () => CardIoExample);

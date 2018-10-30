import React, { Component } from 'react'
import { Image, ImageBackground, Text, View, StyleSheet,   } from 'react-native'
import Expo from 'expo';

export default class Compass extends Component {
    state ={
        isReadt: false
    }
    componentDidMount(){
        this._setup()
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> textInCompfffffonent </Text>
       

      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Expo.Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
    }
});
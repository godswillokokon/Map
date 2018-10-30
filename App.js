import React from 'react';
import { 
  StyleSheet,
  Text, 
  View 
} from 'react-native';
import Maps from './components/map';
import { MapView } from 'expo';
import Expo from 'expo';
export default class App extends React.Component {
  render() {
    return (
      <View >
        <MapView>
          <Maps/>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

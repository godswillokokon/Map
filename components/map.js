import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';
import Expo from 'expo';
export default class Maps extends React.Component {
    state = {
        loaction: null
    };
  _getLocationAsyc = async () => {
      let {status} = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
      if (status !== 'granted'){
          console.error("Location permission not granted");
          return;
          
      }
      let location = await Expo.Location.getCurrentPositionAsync({});
      this.setState({location}); 
    };
    componentDidMount(){
        this._getLocationAsyc();
    }
  render() {
      if (!this.state.location){
          return (<View />);
      }
    return (
        
      <Expo.MapView 
        style={{ flex: 1 }}
        initialRegion={{
            latitude: this.state.loaction.coords.latitude,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}>
        </Expo.MapView> 
      
    );
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



import React, {useState, useCallback, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Colors from '../constants/Colors';





const MapScreen = props => {
  const initialLocation = props.navigation.getParam('initialLocation');
  const readonly = props.navigation.getParam('readonly');
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 10.78,
    longitude: initialLocation ? initialLocation.lng :  -12.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const selectLocationHandler = (e) => {
    if(readonly){
      return
    }
    setSelectedLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude

    })
  
  };

  const savedPickedLocationHandler = useCallback(() => {
    if(!selectedLocation){
      return;
    }
    props.navigation.navigate('NewPlace', {
      pickedLocation: selectedLocation })
    }, [selectedLocation]);




  useEffect(() => {
    props.navigation.setParams({saveLocation: savedPickedLocationHandler})
  }, [savedPickedLocationHandler]);

  let markerCoords;

  if(selectedLocation){
    markerCoords = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    }
  };

  return <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler}>
    {markerCoords && <Marker title="Location" coordinate={markerCoords}></Marker>}
  </MapView>


};


MapScreen.navigationOptions = navData => {
  const saveFn = navData.navigation.getParam('saveLocation');
  const readonly = navData.navigation.getParam('readonly');
  if(readonly) {
    return {};
  }
  return {
    headerRight: () => (
      <TouchableOpacity style={styles.headerBtn} onPress={saveFn}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    )
  }
}




const styles = StyleSheet.create({
  map:{
    flex: 1
  },
  headerBtn:{
    marginHorizontal: 20

  },
  btnText:{
    fontSize: 16,
    color: Colors.grey
  }

});


export default MapScreen;
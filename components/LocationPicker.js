import React, {useState, useEffect} from 'react';
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import  Colors  from '../constants/Colors';
import * as Location from 'expo-location';

import MapPreview from './MapPreview';



const LocationPicker = props => {
    const [pickedLocation, setPickedLocation] = useState();
    const[isFetching, setIsFetching] = useState();

    const mapLocation = props.navigation.getParam('pickedLocation');
    const {onLocation} = props;

    useEffect(() => {
        if(mapLocation){
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }

    }, [mapLocation, onLocation])




    const verifyPermissions = async () => {
        const result = await Location.requestForegroundPermissionsAsync();
          if (result.status !== 'granted') {
            Alert.alert('insufficient Permissions',
             'Location Access is necessary to use this part of the APP!',
              [{ text: 'Okay' }]);
              return false;
        }
    return true;        
    };


const getLocationHandler = async () => {
  const hasPermission = await verifyPermissions();
  if(!hasPermission){
      return;
  }

  try{
      setIsFetching(true);
   const location = await Location.getCurrentPositionAsync({ 
      timeout: 5000
  });
  setPickedLocation({
      lat: location.coords.latitude,
      lng:location.coords.longitude
  });
  props.onLocation({
    lat: location.coords.latitude,
    lng:location.coords.longitude
  });
} catch(err){
    Alert.alert('Could not fetch current location', 'Please try again', [{text: 'Okay'}]);
}
   setIsFetching(false);
};

const pickonMap = () => {
   props.navigation.navigate('Map')
  

}

    return(
        <View style={style.LocationPicker}>
            <MapPreview style={style.mapPrev} location={pickedLocation} onPress={pickonMap}>
            {isFetching ? <ActivityIndicator size='large' color={Colors.om}/> : <Text> No Location Yet</Text>}
            </MapPreview>
        <View style={style.actions}>
        <Button title="Get User Location" color={Colors.navy} onPress={getLocationHandler} />
        <Button title="Pick on map" color={Colors.navy} onPress={pickonMap} />
        </View>
           
            </View>

    )
};


const style = StyleSheet.create({
    LocationPicker:{
        marginBottom: 15
    },
    mapPrev:{
        marginBottom:10,
        width: '100%',
        height: 150,
        borderColor: Colors.accentDark,
        borderWidth: 1,
      

    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 16
    }

});

export default LocationPicker;


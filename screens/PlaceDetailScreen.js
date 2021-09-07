



import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import MapPreview from '../components/MapPreview';





const PlaceDetailsScreen = props => {
  const placeId = props.navigation.getParam('placeId');
  const selectedPlace = useSelector(state => state.places.places.find(place => place.id === placeId));

  const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng }

  const showMapHandler = () => {
    
    props.navigation.navigate('Map',{readonly: true, initialLocation: selectedLocation })
  }

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Image style={{ width: '100%', height: '45%' }} source={{ uri: selectedPlace.image }} />
      <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.title}>{selectedPlace.address}</Text>
        </View>
        <MapPreview style={styles.MapPreview} location={selectedLocation} onPress={showMapHandler} />
       
      </View>
    </ScrollView>

  )


};


PlaceDetailsScreen.navigationOptions = navData => {

  return {
    headerTitle: navData.navigation.getParam('placeTitle'),

  };
};


const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    elevation: 1,
    shadowColor: Colors.grey,
    shadowOpacity: 0.23,
    alignItems: 'center'
  },

  title: {
    fontSize: 20,
    color: Colors.accentDark,
    textTransform: 'capitalize',
    

  },
  addressContainer:{
      
      padding: 19,
    
  },

  MapPreview:{
    width: '100%',
    maxWidth: 350,
    height: 400,
    
  }

});


export default PlaceDetailsScreen;
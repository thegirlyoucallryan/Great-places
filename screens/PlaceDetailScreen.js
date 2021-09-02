



import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';


const PlaceDetailsScreen = props => {
  const placeId = props.navigation.getParam('placeId');
  const selectedPlace = useSelector(state => state.places.places.find(place => place.id === placeId));

  return (
  
<View style={styles.container}>
      <Image style={{width: '80%', height: '90%'}} source={{uri: selectedPlace.image}}/>
      <Text style={styles.title}>{selectedPlace.title}</Text>
      </View>
 
  )


};


PlaceDetailsScreen.navigationOptions = navData => {
  return {
               headerTitle: navData.navigation.getParam('placeTitle'),
  //  headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //              <Item title='Add Place' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
  //                  onPress={() => {
  //                      navData.navigation.navigate('NewPlace');
  //                  }}
  //              />
  //          </HeaderButtons>
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  title: {
    fontSize: 22,
    color: Colors.om,
    textTransform: 'capitalize'
  }

});


export default PlaceDetailsScreen;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1.9,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
   
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    backgroundColor: Colors.grey,
    borderColor: Colors.navy,
    borderWidth: 1.6,
  
  
  },
  infoContainer: {
    marginLeft: 5,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-end',
  
  },
  title: {
    color: Colors.accentDark,
    fontSize: 16,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  address: {
    color: '#666',
    fontSize: 16
  }
});

export default PlaceItem;

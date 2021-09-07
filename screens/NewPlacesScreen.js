



import React, {useState, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, Button, TextInput, ImagePickerIOS } from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places-actions';
import ImagePicker from '../components/ImageSelector';
import LocationPicker from '../components/LocationPicker';


const NewPlacesScreen = props => {
    const [title, setNewTitle] = useState('');
    const [image, setImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState()
    const dispatch = useDispatch();


    const titleHandler = text => {
      setNewTitle(text)
    };

    const imageTakenHandler =(imageUri) => {
        setImage(imageUri);
      
    };

    const locationpickedHandler =useCallback(location => {
        setSelectedLocation(location);

    }, []);

    const savePlaceHandler =() => {
        dispatch(placesActions.addPlace(title, image, selectedLocation));
        props.navigation.goBack();
      
    };

    
  return (
      <ScrollView >
  <View style={styles.form}>
      <Text stye={styles.label}>Title</Text>
      <TextInput style={styles.TextInput} onChangeText={titleHandler} value={title}/>
      <ImagePicker onImageTaken={imageTakenHandler} />
      <LocationPicker navigation={props.navigation} onLocation={locationpickedHandler} />
      <Button title='Save Place' color={Colors.accentDark} onPress={savePlaceHandler}/>
  </View>
  </ScrollView>
  )


};


NewPlacesScreen.navigationOptions = navData => {
    
    return {
         headerTitle: "Add Places",
    
    };
 };





const styles = StyleSheet.create({
    form: {
        margin: 30

    },
    label: {
        fontSize: 18,
        marginBottom: 15,

    },
    TextInput:{
        borderBottomColor: Colors.navy,
        borderBottomWidth:1,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 2



    }


});


export default NewPlacesScreen;
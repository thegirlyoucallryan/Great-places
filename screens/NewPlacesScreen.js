
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


import React, {useState } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, Button, TextInput, ImagePickerIOS } from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places-actions';
import ImagePicker from '../components/ImageSelector';


const NewPlacesScreen = props => {
    const [title, setNewTitle] = useState('');
    const [image, setImage] = useState();
    const dispatch = useDispatch();


    const titleHandler = text => {
      setNewTitle(text)
    };

    const imageTakenHandler =(imageUri) => {
        setImage(imageUri);
      
    }

    const savePlaceHandler =() => {
        dispatch(placesActions.addPlace(title, image));
        props.navigation.goBack();
      
    };

    
  return (
      <ScrollView>
  <View style={styles.form}>
      <Text stye={styles.label}>Title</Text>
      <TextInput style={styles.TextInput} onChangeText={titleHandler} value={title}/>
      <ImagePicker onImageTaken={imageTakenHandler} />
      <Button title='Save Place' color={Colors.accentDark} onPress={savePlaceHandler}/>
  </View>
  </ScrollView>
  )


};


NewPlacesScreen.navigationOptions = navData => {
    return {
         headerTitle: "Add Places",
     headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title='Add Place' iconName={Platform.OS === 'android' ?  'md-add' : 'ios-add'}
         onPress={() => {
             navData.navigation.navigate('NewPlace');
         }}
         />
     </HeaderButtons>
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
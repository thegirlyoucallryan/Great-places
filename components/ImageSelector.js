

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Colors from '../constants/Colors';
import { Camera } from 'expo-camera';

const ImgPicker = props => {
        const [selectedImage, setSeletedImage] = useState('');


    const verifyPermissions = async () => {
        const result = await Camera.requestPermissionsAsync();
        if (result.status !== 'granted') {
            Alert.alert('insufficient Permissions',
             'Camera Access is necessary to use this part of the APP!',
              [{ text: 'Okay' }]);
              return false;
        }
    return true;        
    }
    const takeImageHandler = async() => {
        const hasPermission = await verifyPermissions();
        if(!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
        });
       setSeletedImage(image.uri);
       props.onImageTaken(image.uri);

    };
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!selectedImage ? (<Text>
                    No Image Picked Yet.
                </Text>) : (
                <Image style={styles.image} source={{uri: selectedImage}} />
                )}
            </View>
            <Button title='Take Image' color={Colors.primary} onPress={takeImageHandler} />
        </View>
    )



};
const styles = StyleSheet.create({

    imagePicker: {
        alignItems: 'center',
        marginBottom: 15,
    },

    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 1,

    },

    image: {
        width: '100%',
        height: '100%',

    }


});

export default ImgPicker;
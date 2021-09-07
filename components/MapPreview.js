import React from 'react';
import ENV from '../env'

import {TouchableOpacity, Image, StyleSheet } from 'react-native';

const MapPreview = props => {
    let imagePreviewUrl;
    if(props.location){
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
            props.location.lat
          },${
            props.location.lng
          }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
            props.location.lat
          },${props.location.lng}&key=${ENV.googleApiKey}`;
    }

 
 return <TouchableOpacity onPress={props.onPress} style={{...style.mapPrev, ...props.style}}>
           {props.location ? <Image style={style.mapImage} source={{uri: imagePreviewUrl}} /> : props.children}
            </TouchableOpacity>

};
const style = StyleSheet.create({
    mapPrev: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage:{
        width: '100%',
        height: '100%'
    }
});

export default MapPreview;
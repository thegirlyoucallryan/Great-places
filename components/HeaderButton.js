
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';


const CustomHeaderButton = props => {
        
    return(
    <HeaderButton {...props} IconComponent={Ionicons} IconSize={25} color={Platform.OS === 'android' ? Colors.grey : Colors.accentDark }
    />
    )
};

export default CustomHeaderButton;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailScreen';
import Colors from '../constants/Colors';

import NewPlacesScreen from '../screens/NewPlacesScreen';




const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailsScreen,
    NewPlace: NewPlacesScreen


},  {

    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.navy : Colors.grey
        },
        headerTintColor: Platform.OS === 'android' ? Colors.grey : Colors.navy


    }

});

export default createAppContainer(PlacesNavigator);
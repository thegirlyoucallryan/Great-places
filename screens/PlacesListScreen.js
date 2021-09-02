import React, {useEffect} from 'react';
import {  StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector,useDispatch } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

import HeaderButton from '../components/HeaderButton';

import * as placesActions from '../store/actions/places-actions';


const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(placesActions.loadPlaces());
    }, [dispatch])
    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={itemData => <PlaceItem image={itemData.item.image} title={itemData.item.title} address={null} onSelect={() => props.navigation.navigate('PlaceDetail', {
            placeTitle: itemData.item.title,
            placeId: itemData.item.id,
            placeImage: itemData.item.image
        })
        }/>
            } r
            />
            );


};

PlacesListScreen.navigationOptions = navData => {
   return {
                headerTitle: "All the Places",
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Add Place' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                />
            </HeaderButtons>
   };
};



            const styles = StyleSheet.create({

            });


            export default PlacesListScreen;
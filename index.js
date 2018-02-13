//Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import  Header  from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
    <View style={{ flex: 1 }}> 
        <Header text={'Albums'}/>
        <AlbumList/>
    </View>
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
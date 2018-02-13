//importing the libraries
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//creating the component
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ albums: response.data }))
    }

    renderAlbums(){
        return this.state.albums.map( album => 
            <AlbumDetail key={album.title} album={album}/> 
        )
    }
    
    render(){
        return (
            <ScrollView>
                <View>
                    {this.renderAlbums()}
                </View>
            </ScrollView>
        );    
    }
}

//making the component avaible to the others parts of the app
export default AlbumList;
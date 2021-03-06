//importing libraries
import React from 'react';
import { Text, View } from 'react-native';

//creating the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                { props.text }
            </Text>
        </View>
    );
};

//styling component
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
        position: 'relative'
    }
};

//making the component avaible to other parts of the app
export default Header;
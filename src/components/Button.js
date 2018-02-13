import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ text, onPress }) => {
    const { buttonStyle, textButtonStyle } = styles;
    
    return (
        <TouchableOpacity onPress={onPress} style={ buttonStyle }>
            <Text style={ textButtonStyle }>{ text }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    textButtonStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600' 
    }

}

export default Button;
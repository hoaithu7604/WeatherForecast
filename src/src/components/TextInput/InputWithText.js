import React from 'react';
import {View,Text, TextInput} from 'react-native';

import styles from './styles';

const InputWithText = (props) => {
    const {buttonText,onChangeText} = props;
    return (
    <View style = {styles.container}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <View style = {styles.border}/>
        <TextInput onChangeText={(text=>onChangeText(text))} style = {styles.input}/>
    </View>
    )
};

export default InputWithText;
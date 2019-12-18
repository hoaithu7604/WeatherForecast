import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
const Container = ({children}) => (
  <View style={{width: '100%', height: '100%'}}>
    <ImageBackground
      imageStyle={{opacity: 0.2}}
      source={require('../../assets/backgrounds/background.jpg')}
      style={styles.container}>
      {children}
    </ImageBackground>
  </View>
);

export default Container;

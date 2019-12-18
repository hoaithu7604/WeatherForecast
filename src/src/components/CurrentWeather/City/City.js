import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
class City extends Component {
  render() {
    const {cityName} = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.cityIcon}
          source={require('../../../assets/city.png')}
        />
        <Text style={styles.cityName}>{cityName}</Text>
      </View>
    );
  }
}
export default City;

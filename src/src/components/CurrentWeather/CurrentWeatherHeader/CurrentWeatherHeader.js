import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Globals from '../../../Globals';
import styles from './styles';
class CurrentWeatherHeader extends Component {
  render() {
    const {weather, temp} = this.props;
    const imageUrl = Globals.iconUrl(weather.icon);
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={{uri: imageUrl}} />
        <Text style={styles.temp}>{temp}°</Text>
        <View style={styles.headerInfo}>
          <Text style={styles.headerInfoMainText}>{weather.main}</Text>
          <Text style={styles.headerInfoDetailText}>{weather.description}</Text>
        </View>
      </View>
    );
  }
}
export default CurrentWeatherHeader;

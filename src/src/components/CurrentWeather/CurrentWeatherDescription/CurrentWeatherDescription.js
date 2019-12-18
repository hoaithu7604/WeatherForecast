import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Globals from '../../../Globals';
import styles from './styles';
class CurrentWeatherDescription extends Component {
  render() {
    const {data, wind} = this.props;
    return (
      <View style={styles.description}>
        <View style={styles.wind}>
          <View style={styles.subItemLeft}>
            <Text style={styles.subHeader}>WIND SPEED</Text>
            <Text style={styles.subText}>{wind.speed}m/s</Text>
          </View>
          <View style={styles.subItemLeft}>
            <Text style={styles.subHeader}>HUMIDITY</Text>
            <Text style={styles.subText}>{data.humidity}%</Text>
          </View>
        </View>
        <View style={styles.subTemp}>
          <View style={styles.subItemRight}>
            <Text style={styles.subHeader}>MIN TEMPERATURE</Text>
            <Text style={styles.subText}>{data.temp_min}°</Text>
          </View>
          <View style={styles.subItemRight}>
            <Text style={styles.subHeader}>MAX TEMPERATURE</Text>
            <Text style={styles.subText}>{data.temp_max}°</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default CurrentWeatherDescription;

import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
class CurrentWeather extends Component {
  render() {
    const {data} = this.props;
    return <View style={styles.container} />;
  }
}
export default CurrentWeather;

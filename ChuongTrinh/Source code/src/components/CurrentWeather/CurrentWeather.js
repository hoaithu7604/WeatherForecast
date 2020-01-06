import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import City from './City/City';
import CurrentWeatherHeader from './CurrentWeatherHeader/CurrentWeatherHeader';
import CurrentWeatherDescription from './CurrentWeatherDescription/CurrentWeatherDescription';

class CurrentWeather extends Component {
  render() {
    const {data} = this.props;
    if (!data.name) return null;
    console.log(data);
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <City cityName={data.name} />
          <CurrentWeatherHeader
            temp={data.main.temp}
            weather={data.weather[0]}
          />
          <CurrentWeatherDescription data={data.main} wind={data.wind} />
        </View>
      </View>
    );
  }
}
export default CurrentWeather;

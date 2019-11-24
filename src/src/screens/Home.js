import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Container} from '../components/Container';
import {InputWithText} from '../components/TextInput';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import Globals from '../Globals';
const CITY_TEXT = 'City';

class Home extends Component {
  getWeather(city) {
    Globals.getCurrentWeather(city).then(data => {
      if (data.cod != 200) {
        console.log(data.message);
        console.log('-----------------------');
      } else {
        console.log('City: ' + data.name);
        console.log('Weather: ' + data.weather[0].main);
        console.log('Temp: ' + data.main.temp);
        console.log('Wind speed: ' + data.wind.speed);
        console.log('-----------------------');
      }
    });
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <InputWithText onChangeText={this.getWeather} />
        <CurrentWeather />
        <WeatherForecast />
      </Container>
    );
  }
}
export default Home;

import React, {Component} from 'react';
import {
  StatusBar,
  Keyboard,
  View,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Container} from '../components/Container';
import {InputWithText} from '../components/TextInput';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import Globals from '../Globals';
const CITY_TEXT = 'City';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isLoadingForecast: false,
      city: '',
      detail: {},
      forecastDetail: {},
    };
  }
  getWeather = city => {
    this.setState({isLoading: true, isLoadingForecast: true});
    Globals.getCurrentWeather(city).then(data => {
      if (data.cod != 200) {
        this.setState({...state, isLoading: false});
        Alert.alert(
          'Network Error',
          "Can't get data from the server. Please check your connection and try again.",
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        this.setState({city: city, detail: data});
        setTimeout(() => {
          this.setState({isLoading: false});
        }, 500);
      }
    });
    Globals.getForecast(city).then(data => {
      if (data.cod != 200) {
        this.setState({...state, isLoadingForecast: false});
        Alert.alert(
          'Network Error',
          "Can't get data from the server. Please check your connection and try again.",
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        this.setState({city: city, forecastDetail: data});
        setTimeout(() => {
          this.setState({isLoadingForecast: false});
        }, 500);
      }
    });
  };
  render() {
    const {isLoading, isLoadingForecast} = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {/* dummy view */}
        <View style={{flex: 1}} />
        <InputWithText onChangeText={this.getWeather} isLoading={isLoading} />
        <CurrentWeather />
        <WeatherForecast />
        {isLoading || isLoadingForecast ? (
          <ActivityIndicator
            size="large"
            color={Globals.PRIMARY_COLOR}
            style={{position: 'absolute', zIndex: 6}}
          />
        ) : null}
      </Container>
    );
  }
}
export default Home;

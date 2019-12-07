import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import SelectedForecast from './SelectedForecast/SelectedForecast';
import ForecastItem from './ForecastItem/ForecastItem';
class WeatherForecast extends Component {
  render() {
    const {data} = this.props;
    const temp = [];
    return (
      <View style={styles.container}>
        <View style={styles.selectedContainer}>
          <SelectedForecast />
        </View>
        <SafeAreaView style={styles.listContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.list
              ? data.list.map(data => (
                  <ForecastItem data={data} key={data.dt} />
                ))
              : null}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
export default WeatherForecast;
